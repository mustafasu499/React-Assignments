import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import Navbar from "../Navbar/Navbar";
import { IoMdQuote } from "react-icons/io";
import Card from "../Card/Card";
import axios from "axios";
import MultiActionAreaCard from "../Card/Card";
import Cards from "../Card/Card";

const Home = () => {
  const [apiData, setapiData] = useState([]);
  useEffect(() => {
    getDataApi();
  }, []);

  const getDataApi = async () => {
    const response = await axios.get("https://fakestoreapi.com/products/");
    setapiData(response.data);
  };

  console.log(apiData);
  return (
    <>
      <div>
        <div className={styles.bg_image}>
          <div className={styles.main_box}>
            <Navbar />
            <div className={styles.main_heading_box}>
              <div className={styles.main_hero_section_box}>
                <div>
                  <p className={styles.collection_box}>Summer Collection</p>
                  <p className={styles.heading_box}>
                    Introducing New <br />
                    Arrivals
                  </p>
                  <p className={styles.heading_desc_section}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo
                  </p>
                </div>

                <button className={styles.heading_btn}> VIEW COLLECTION</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section_2_box}>
          <div className={styles.section_2_innher_box}>
            <p className={styles.section_2_icon}>
              <IoMdQuote />
            </p>
            <p className={styles.section_2_heading}>
              Shopping is cheaper than therapy.
            </p>
          </div>
        </div>
        <div className={styles.card_heading}>Featured Products</div>
        <div className={styles.card_box}>
          {apiData.map((e, i) => {
            return (
              <div className={styles.card_sectin}>
                <div className={styles.card} key={i}>
                  <Cards
                    img={e.image}
                    title={e.title}
                    desc={e.desc}
                    price={e.price}
                    id={e.id}
                    category={e.category}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
