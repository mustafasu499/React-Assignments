import React from "react";
import styles from "./style.module.css";

const SignUp = () => {
  return (
    <div className={styles.container_box}>
      <h1 className={styles.heading_box}>Wellcome To signUp Page</h1>
      <div className={styles.flex_box}>
        <div className={styles.main_box}>
          <div className={styles.username_password_box}>
            <label className={styles.username_password} htmlFor="">
              Username
            </label>
            <br />
            <input
              className={styles.input_box}
              placeholder="Enter Your username"
              type="text"
            />
          </div>

          <div className={styles.username_password_box}>
            <label className={styles.username_password} htmlFor="">
              Password
            </label>
            <br />
            <input
              className={styles.input_box}
              placeholder="Enten your password"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className={styles.account_signUp}>
        <p>
          Do Yo have a account?
          <a className={styles.anchor_tag} href="./Login.jsx">
            Login
          </a>
        </p>
      </div>
      <div className={styles.button_box}>
        <button className={styles.button_tag}>Login</button>
      </div>
    </div>
  );
};

export default SignUp;
