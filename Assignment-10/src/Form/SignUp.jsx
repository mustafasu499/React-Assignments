import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import styles from "./Styles.module.css";
import { IoEyeSharp } from "react-icons/io5";

const SignUp = () => {
  return (
    <div className={styles.body_box}>
      <div className={styles.heading_box}>
        <p>
          Try <b>Sign </b> free for 14 days
        </p>
      </div>
      <div className={styles.heading2_box}>
        <p>
          Already have a Formstack account?{" "}
          <a href="#" className={styles.heading2_innher}>
            Start your trial in app{" "}
            <span>
              <MdKeyboardArrowRight className={styles.heading2_innher_icon} />
            </span>
          </a>
        </p>
      </div>
      <form action="">
        <div className={styles.form_box}>
          <div>
            <div className={styles.first_saction}>
              <div className={styles.first_saction_innher}>
                <label htmlFor="">FIRST NAME</label>
                <br />
                <input
                  className={styles.first_saction_input_box}
                  placeholder="Ghulam"
                  type="text"
                />
              </div>
              <div className={styles.first_saction_innher1}>
                <label htmlFor="">LAST NAME</label>
                <br />
                <input
                  className={styles.first_saction_input_box}
                  placeholder="Mustafa"
                  type="text"
                />
              </div>
            </div>
            <div className={styles.main_saction_box}>
              <div className={styles.saction_2}>
                <label className={styles.label_tag} htmlFor="">
                  WORK EMAIL
                </label>
                <br />
                <input
                  placeholder="musatafa@gmail.com"
                  className={styles.input_and_select_teg}
                  type="text"
                />
              </div>
              <div className={styles.saction_2}>
                <label className={styles.label_tag} htmlFor="">
                  PASSWORD
                </label>
                <br />
                <input
                  className={styles.input_and_select_teg}
                  placeholder="Password"
                  type="text"
                />
                <IoEyeSharp className={styles.icon} />
              </div>
              <div className={styles.saction_2}>
                <label className={styles.label_tag} htmlFor="">
                  ORGANIZATION NAME
                </label>
                <br />
                <input
                  className={styles.input_and_select_teg}
                  placeholder="ABC Organization"
                  type="text"
                />
              </div>
              <div className={styles.saction_2}>
                <label className={styles.label_tag} htmlFor="">
                  ORGANIZATION SIZE
                </label>
                <select className={styles.input_and_select_teg} name="" id="">
                  <option selected disabled value="">
                    --select--
                  </option>
                  <option value="">ABC</option>
                  <option value="">EFG</option>
                  <option value="">HIJ</option>
                </select>
              </div>
              <div className={styles.saction_2}>
                <label className={styles.label_tag} htmlFor="">
                  INDUSTRY
                </label>
                <select className={styles.input_and_select_teg} name="" id="">
                  <option selected disabled value="">
                    --select--
                  </option>
                  <option value="">ABC</option>
                  <option value="">EFG</option>
                  <option value="">HIJ</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className={styles.footer}>
        <p>
          Formstack has updated our Terms of Service effective january 4, 2023.
          <br />
          We encourdge you to read the document in its entirety.
        </p>
      </div>
      <div className={styles.footer2}>
        <p>
          <input type="checkbox" /> I understand and agree to the{" "}
          <a href="#">Formstack privacy policy,</a>
          <a href="#">
            Software <br />
            Services Agreement,
          </a>{" "}
          and <a href="#">Acceptable Use policy.</a>
        </p>
      </div>
      <div className={styles.button_box}>
        <button className={styles.button}>
          {" "}
          <b>start free trial</b>
        </button>
      </div>
    </div>
  );
};

export default SignUp;
