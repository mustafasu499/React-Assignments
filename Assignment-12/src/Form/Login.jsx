import React, { useState } from "react";
import styles from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleLogin = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if (input.email !== loggeduser.email) {
      alert("Invalid Email");
    } else if (input.password !== loggeduser.password) {
      alert("Invalid Password");
    } else {
      navigate("/home");
    }
  };
  return (
    <>
      <div className={styles.body_box}>
        <div className={styles.main_box}>
          <div className={styles.heading_box}>
            <h1>Login</h1>
          </div>
          <form onSubmit={handleLogin}>
            <div className={styles.input_box}>
              <div className={styles.input_innher_box}>
                <label className={styles.label_tag} htmlFor="Username">
                  Email
                </label>
                <br />
                <input
                  onChange={(e) =>
                    setInput({ ...input, email: e.target.value })
                  }
                  className={styles.input_tag}
                  type="text"
                  placeholder="Username"
                />
                <br />
                <label className={styles.label_tag} htmlFor="password">
                  password
                </label>
                <input
                  onChange={(e) =>
                    setInput({ ...input, password: e.target.value })
                  }
                  className={styles.input_tag}
                  type="password"
                  placeholder="password"
                />
              </div>
              <div>
                <span>
                  Don't have a account{" "}
                  <Link className={styles.link_tag} to="/">
                    Signup
                  </Link>
                </span>
              </div>
              <div className={styles.btn_box}>
                <button type="submit" className={styles.button_tag}>
                  {" "}
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
