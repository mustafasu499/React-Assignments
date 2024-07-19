import React, { useState } from "react";
import styles from "./Style.module.css";
import { MdOutlineAddCircle } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBackFill } from "react-icons/ri";

const Todo = () => {
  const [input, setinput] = useState("");
  const [todos, settodos] = useState([]);
  const additems = () => {
    if (input) {
      settodos([...todos, input]);
      setinput("");
      return;
    } else {
      alert("Please Enter the Todo");
    }
  };

  const deletAllBtn = () => {
    alert("Do You Conform Delete All items....");
    settodos([]);
  };
  const singleItemDeleteBtn = (index) => {
    console.log(index);
    const filteredTodos = todos.filter((todo, id) => {
      return index !== id;
    });
    settodos(filteredTodos);
  };
  return (
    <div className={styles.body_box}>
      <div className={styles.comtainer_box}>
        <h1 className={styles.heading}>Todo App</h1>
        <div className={styles.input_box}>
          <input
            value={input}
            onChange={(e) => setinput(e.target.value)}
            className={styles.input_teg}
            placeholder="Enter Items..."
            type="text"
          />
          <MdOutlineAddCircle
            key={"id"}
            onClick={() => additems()}
            className={styles.add_btn}
          />
          <MdDelete onClick={deletAllBtn} className={styles.add_btn} />
        </div>
        {todos.map((e, id) => {
          return (
            <div className={styles.items_box}>
              <li className={styles.items_teg} key={id}>
                {e}
              </li>
              <MdModeEdit className={styles.items_btn} />
              <RiDeleteBackFill
                onClick={(index) => singleItemDeleteBtn(index)}
                className={styles.items_btn2}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
