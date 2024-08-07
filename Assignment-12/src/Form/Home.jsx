import React from "react";
import styles from "./home.module.css";
import { productData } from "../Data";
import MediaCard from "../Card";

const Home = () => {
  return (
    <div className={styles.home_box}>
      <div className={styles.body_box}>
        <div className={styles.home_main_box}>
          {productData.map((e, i) => {
            return (
              <MediaCard
                key={i}
                title={e.title}
                id={e.id}
                desc={e.description}
                img={e.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
