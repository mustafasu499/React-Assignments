import React from "react";

const DropDown = ({ title, optionOne, optionTow }) => {
  return (
    <>
      <select
        style={{
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
          color: "#fff",
          fontSize: "16px",
        }}
        name=""
        id=""
      >
        <option
          style={{ border: "none", outline: "none", color: "black" }}
          disabled
          value="1"
        >
          {title}
        </option>
        <option
          style={{ border: "none", outline: "none", color: "black" }}
          value="2"
        >
          {optionOne}
        </option>
        <option
          style={{ border: "none", outline: "none", color: "black" }}
          value="3"
        >
          {optionTow}
        </option>
      </select>
    </>
  );
};

export default DropDown;
