import React from "react";
import styled from "./button.module.css";
function Button({ children, ...res }) {
  return (
    <button className={styled.Button} {...res}>
      {children}
    </button>
  );
}

export default Button;
