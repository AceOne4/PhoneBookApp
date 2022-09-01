import React from "react";
import styled from "./usercard.module.css";
export default function UserCard({
  name,
  gender,
  phone,
  city,
  id,
  onDelete,
  onEdit,
}) {
  const DeleteHandler = () => {
    onDelete(id);
  };
  const EditHandler = () => {
    onEdit(id);
  };

  return (
    <div className={styled.UlCont}>
      <ul>
        <li>
          <span>Name: </span>
          {name}
        </li>
        <li>
          <span>Gender: </span>
          {gender}
        </li>
        <li>
          <span>Phone: </span>
          {phone}
        </li>
        <li>
          <span>City: </span>
          {city}
        </li>
      </ul>
      <button className={styled.btnEdit} onClick={EditHandler}>
        EDIT
      </button>
      <button className={styled.btnclose} onClick={DeleteHandler}>
        x
      </button>
    </div>
  );
}
