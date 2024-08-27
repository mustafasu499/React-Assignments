import React, { useEffect, useState } from "react";
import styles from "./Style.module.css";
import { MdOutlineAddCircle } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBackFill } from "react-icons/ri";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { dataBase } from "../config/firebase";

const Todo = () => {
  const [input, setinput] = useState("");
  const [todos, settodos] = useState([]);
  const [todo, settodo] = useState("");
  const [userData, setUserData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const addData = () => {
    let todoObj = {
      todo,
    };

    try {
      const docRef = addDoc(collection(dataBase, "todos"), todoObj);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const additems = () => {
    if (input) {
      settodos([...todos, input]);
      setinput("");
      return;
    } else {
      alert("Please Enter the Todo");
    }
  };

  useEffect(() => {
    getData();
  }, [refresh]);
  const getData = async () => {
    try {
      const arr = [];
      const getData = await getDocs(collection(dataBase, "todos"));

      getData.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
      });

      setUserData(arr);
    } catch (error) {
      console.log(error);
    }
  };

  const deletAllBtn = () => {
    alert("Do You Conform Delete All items....");
    settodos([]);
  };
  const singleItemDeleteBtn = async (id) => {
    const deleteUser = await deleteDoc(doc(dataBase, "todos", id));

    setRefresh(!refresh);
  };
  const editBtn = async (id) => {
    console.log("id", id);

    let updateVal = prompt("Enter edit value");

    let updatetodo = {
      todo: updateVal,
    };

    const updateData = await updateDoc(doc(dataBase, "todos", id), updatetodo);

    console.log("updateData", updateData);
    setRefresh(!refresh);
  };
  return (
    <div className={styles.body_box}>
      <div className={styles.comtainer_box}>
        <h1 className={styles.heading}>Todo App</h1>
        <div className={styles.input_box}>
          <input
            value={input}
            onChange={(e) => {
              settodo(e.target.value);
              setinput(e.target.value);
            }}
            className={styles.input_teg}
            placeholder="Enter Items..."
            type="text"
          />
          <MdOutlineAddCircle
            key={"id"}
            onClick={() => {
              additems();
              addData();
            }}
            className={styles.add_btn}
          />
          <MdDelete onClick={deletAllBtn} className={styles.add_btn} />
        </div>
        {userData.map((e, id) => {
          return (
            <div className={styles.items_box} key={id}>
              <li className={styles.items_teg}>{e.todo}</li>
              <MdModeEdit
                onClick={() => editBtn(e.id)}
                className={styles.items_btn}
              />
              <RiDeleteBackFill
                onClick={() => singleItemDeleteBtn(e.id)}
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
