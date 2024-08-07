import React, { useState } from "react";
import styles from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    if (input.password === input.confirmPassword) {
      navigate("/login");
    } else {
      alert("please check your password");
    }
  };
  return (
    <>
      <div className={styles.body_box}>
        <div className={styles.main_box}>
          <div className={styles.heading_box}>
            <h1>SignUp</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.input_box}>
              <div className={styles.input_innher_box}>
                <label htmlFor="Username">Username</label>
                <input
                  onChange={(e) =>
                    setInput({ ...input, userName: e.target.value })
                  }
                  className={styles.input_tag}
                  type="text"
                  placeholder="Username"
                />
                <br />
                <label htmlFor="password">Email</label>
                <input
                  onChange={(e) =>
                    setInput({ ...input, email: e.target.value })
                  }
                  className={styles.input_tag}
                  type="Email"
                  placeholder="Email"
                />
                <label htmlFor="Username">Password</label>
                <input
                  onChange={(e) =>
                    setInput({ ...input, password: e.target.value })
                  }
                  className={styles.input_tag}
                  type="password"
                  placeholder="Password"
                />
                <br />
                <label htmlFor="password"> Confirm password</label>
                <input
                  onChange={(e) =>
                    setInput({ ...input, confirmPassword: e.target.value })
                  }
                  className={styles.input_tag}
                  type="password"
                  placeholder="Confirm password"
                />
              </div>
              <div>
                You have a account <Link to="/login">Login</Link>
              </div>
              <div className={styles.btn_box}>
                <button type="submit" className={styles.button_tag}>
                  {" "}
                  SignUp
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
