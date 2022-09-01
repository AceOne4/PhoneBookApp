import React from "react";
import Button from "./Button";
import Container from "./Container";
import styled from "./modal.module.css";

function Modal({ children, closeForm }) {
  return (
    <div className={styled.modal}>
      <Container>
        <Button onClick={() => closeForm()}>Close Form</Button>
        {children}
      </Container>
    </div>
  );
}

export default Modal;
