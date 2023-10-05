import React from "react";

import "./Button.css";

const Button = (props) => {
  const customClass = "button " + props.className;
  return (
    <button type={props.type} className={customClass} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
