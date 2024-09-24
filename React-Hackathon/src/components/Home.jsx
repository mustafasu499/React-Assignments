import React from "react";
import Navbar from "./NavBar/Navbar";
import styles from "./style.module.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <div style={{ width: "100%" }}>
        <div
          className={styles.home_section}
          style={{ backgroundColor: "#5D6265" }}
        >
          <div className={styles.home_Bg_img}> </div>
        </div>
      </div>
    </>
  );
};

export default Home;
