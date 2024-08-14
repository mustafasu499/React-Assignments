import React from "react";
import logoImg from "../assets/logo.png";
import { SlBasket } from "react-icons/sl";
import styles from "../ECommerceApp/home.module.css";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_img_section}>
        <img width="100%" src={logoImg} alt="" />
      </div>
      <div className={styles.navbar_2_section}>
        <span>HOME</span>
        <span>ALL PRODUCTS</span>
        <span>ABOUT US</span>
      </div>
      <div className={styles.navbar_basket_icon}>
        <SlBasket />
      </div>
    </div>
  );
};

export default Navbar;
