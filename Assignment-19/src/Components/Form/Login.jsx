import React, { useState } from "react";
import jpImg from "../../assets/jawanPakistan.jpg";
import styles from "./style.module.css";
import { Checkbox } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

const Login = () => {
  const [showPassword, setShowPassword] = useState();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordHidden = () => {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type == "password") {
      passwordInput.type = "text";
      setShowPassword(true);
    } else if (passwordInput.type == "text") {
      passwordInput.type = "password";
      setShowPassword(false);
    }
  };
  const navigate = useNavigate();
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("userLogin>>>>", userCredential);
        console.log(userCredential.user.uid);
        localStorage.setItem("user_Uid", userCredential.user.uid);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className={styles.main_box}>
      <div className={styles.login_section_1}>
        <img style={{ width: "80px" }} src={jpImg} alt="" />
        <h1 className={styles.heading}>
          WELCOME TO LEARNING MANAGEMENT SYSTEM
        </h1>
        <div className={styles.login_bg_img}></div>
      </div>
      <div className={styles.login_section_2}>
        <div className={styles.login_section_2_innher}>
          <h2 className={styles.login_heading}>LOGIN</h2>
          <div className={styles.input_box}>
            <div style={{ position: "relative" }}>
              <label className={styles.label_tag}>Email:</label>
              <br />
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter your email"
                className={styles.input_tag}
                type="email"
              />
              <br />
              <label className={styles.label_tag}>password:</label>
              <br />
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id="password"
                placeholder="Enter your password"
                className={styles.input_tag}
                type="password"
              />
              {!showPassword ? (
                <VisibilityIcon
                  id="showpass"
                  onClick={() => handlePasswordHidden()}
                  className={styles.eye_icon}
                  style={{
                    position: "absolute",
                    right: 10,
                    bottom: 12,
                    color: "#888888 ",
                  }}
                />
              ) : (
                <VisibilityOffIcon
                  onClick={() => handlePasswordHidden()}
                  id="hiddenpass"
                  className={styles.eye_icon}
                  style={{
                    position: "absolute",
                    right: 10,
                    bottom: 12,
                    color: "#888888 ",
                  }}
                />
              )}
            </div>
          </div>
          <div className={styles.remember_section}>
            <div>
              <Checkbox
                className={styles.checkbox}
                {...label}
                color="success"
              />
              Remember me
            </div>
            <div>
              <NavLink to={"#"}>click here?</NavLink>
            </div>
          </div>
          <div style={{ marginTop: "50px", width: "100%" }}>
            <div
              style={{
                width: "100%",
                textAlign: "center",
                lineHeight: "30px",
              }}
            >
              <button
                onClick={handleLogin}
                style={{ width: "100%" }}
                className={styles.login_btn}
              >
                Login
              </button>
              <br />
              <span style={{ fontWeight: 600 }}>Or</span>
              <br />
              <NavLink
                to={"/signup"}
                style={{ color: "#11792e", fontWeight: 600 }}
              >
                Sign up
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
