import React, { useState } from "react";
import jpImg from "../../assets/jawanPakistan.jpg";
import styles from "./style.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {
  const [signUp, setSignUp] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState();
  const navigate = useNavigate();
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
  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, signUp.email, signUp.password)
      .then((userCredential) => {
        console.log("respons >>>>>", userCredential);
        navigate("/");
        const uID = userCredential.user.uid;
        console.log(uID);
      })
      .catch((error) => {
        console.log(error);
        // ..
      });
    // setDoc(doc(Database, "users"));
    console.log(signUp.firstName);
    console.log(signUp.lastName);
    console.log(signUp.email);
    console.log(signUp.password);
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
        <div
          className={styles.login_section_2_innher}
          style={{ width: "450px", lineHeight: "45px" }}
        >
          <h2 className={styles.login_heading}>SIGN UP</h2>
          <div className={styles.input_box}>
            <div style={{ position: "relative" }}>
              <label className={styles.label_tag}>First name:</label>
              <br />
              <input
                onChange={(e) => {
                  setSignUp({ ...signUp, firstName: e.target.value });
                }}
                style={{ border: "1px solid #cecdcd" }}
                placeholder="Enter your First name"
                className={styles.input_tag}
                type="email"
              />
              <br />
              <label className={styles.label_tag}>Last name:</label>
              <br />
              <input
                required
                onChange={(e) => {
                  setSignUp({ ...signUp, lastName: e.target.value });
                }}
                style={{ border: "1px solid #cecdcd" }}
                placeholder="Enter your Last name"
                className={styles.input_tag}
                type="email"
              />
              <br />
              <label className={styles.label_tag}>Email:</label>
              <br />
              <input
                required
                onChange={(e) => {
                  setSignUp({ ...signUp, email: e.target.value });
                }}
                style={{ border: "1px solid #cecdcd" }}
                placeholder="Enter your email"
                className={styles.input_tag}
                type="email"
              />
              <br />
              <label className={styles.label_tag}>password:</label>
              <br />
              <input
                onChange={(e) => {
                  setSignUp({ ...signUp, password: e.target.value });
                }}
                style={{ border: "1px solid #cecdcd" }}
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
          <div style={{ marginTop: "50px", width: "100%" }}>
            <div
              style={{
                width: "100%",
                textAlign: "center",
                lineHeight: "30px",
              }}
            >
              <button
                onClick={handleSubmit}
                style={{ backgroundColor: "#FAFAFA", width: "100%" }}
                className={styles.login_btn}
              >
                Sign Up
              </button>
              <br />
              <span style={{ fontWeight: 600 }}>Or</span>
              <br />
              <NavLink
                to={"/signup"}
                style={{ color: "#11792e", fontWeight: 600 }}
              >
                Already have a profile?
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
