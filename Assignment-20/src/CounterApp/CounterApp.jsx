import React from "react";
import styles from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addCounter, delCounter, reset } from "../store/slices/counterSlice";

const CounterApp = () => {
  const count = useSelector((state) => state.counterReducer);
  console.log(count.counter);
  const dispatch = useDispatch();
  const handleAddBtn = () => {
    dispatch(addCounter());
  };
  const handleDelBtn = () => {
    dispatch(delCounter());
  };
  const handleReset = () => {
    dispatch(reset());
  };
  return (
    <>
      <div className={styles.main_box}>
        <div className={styles.counter_box}>
          <h1 style={{ margin: 30, fontSize: 35 }}>Counter App</h1>

          <h1 style={{ margin: 30, fontSize: 50 }}>{count.counter}</h1>
          <div>
            <button
              onClick={handleDelBtn}
              style={{
                margin: 20,
                width: 100,
                height: 40,
                borderRadius: 20,
                border: "none",
                outline: "none",
                backgroundColor: "#FFA500",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Decrement
            </button>
            <button
              onClick={handleReset}
              style={{
                margin: 20,
                width: 100,
                height: 40,
                borderRadius: 20,
                border: "none",
                outline: "none",
                backgroundColor: "#FF1E01",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Reset
            </button>
            <button
              onClick={handleAddBtn}
              style={{
                margin: 20,
                width: 100,
                height: 40,
                borderRadius: 20,
                border: "none",
                outline: "none",
                backgroundColor: "#047917",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Increment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterApp;
