import React from "react";
import css from "./index.css";

export function TextField({ type, label, name }) {
  return (
    <div className="form-floating mb-3">
      <input
        type={type}
        className="form-control"
        id="floatingInput"
        placeholder={label}
        name={name}
      />
      <label htmlFor="floatingInput">{label}</label>
    </div>
  );
}
