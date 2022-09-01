import React from "react";
import styled from "./container.module.css";
function Container({ children }) {
  return <div className={styled.Container}>{children}</div>;
}

export default Container;
