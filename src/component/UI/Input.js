import React from "react";

function Input({ label, ...res }) {
  return (
    <>
      {label && (
        <label htmlFor={label}>
          {label.charAt(0).toUpperCase() + label.substring(1)}
        </label>
      )}
      <input {...res} />
    </>
  );
}

export default Input;
