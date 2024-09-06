import React from "react";
import navIcon from "../../assets/navicon.svg";
import { NavLink } from "react-router-dom";
import styles from "../Screens/screen.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex" }}>
            <div style={{ width: 25, display: "flex" }}>
              <img style={{ width: "100%" }} src={navIcon} alt="" />
            </div>
            <div>Learning Managememnt System</div>
          </div>
          <div>
            <p>R</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
