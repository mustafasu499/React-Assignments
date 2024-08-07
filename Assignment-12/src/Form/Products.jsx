import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./product.module.css";
import { productData } from "../Data";
import { IoIosArrowBack } from "react-icons/io";

const Products = () => {
  const { id } = useParams();
  console.log(id);
  const filterData = productData.filter((e, i) => {
    return e.id == id;
  });
  const navigate = useNavigate();
  return (
    <div className={styles.products_box}>
      <div className={styles.main_box}>
        <div
          onClick={() => {
            navigate("/home");
          }}
          className={styles.back_btn}
        >
          <IoIosArrowBack />
        </div>
        {filterData.map((e, i) => {
          return (
            <div className={styles.product_section} key={i}>
              <div className={styles.image_box}>
                <img width="100%" src={e.image} alt="" />
              </div>
              <div className={styles.products_section_2}>
                {" "}
                <h1 style={{ marginBottom: "30px" }}>{e.title}</h1>
                <p style={{ marginBottom: "30px" }}>{e.description}</p>
                <h2>price {e.price}$</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
