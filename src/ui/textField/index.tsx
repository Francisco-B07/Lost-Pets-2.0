import React from "react";
import css from "./index.css";

type TextFieldProp = {
  type: string;
  label: string;
  name: string;
  fullName?: string;
};
type TextAreaProp = {
  label: string;
  name: string;
};

export function TextField(props: TextFieldProp) {
  const { type, label, name, fullName } = props;
  return (
    <div className="form-floating mb-3">
      <input
        type={type}
        className={`form-control ${css.input}`}
        id={name}
        placeholder={label}
        name={name}
        defaultValue={fullName}
      />

      <label htmlFor={name}>{label}</label>
    </div>
  );
}
export function TextArea(props: TextAreaProp) {
  const { label, name } = props;
  return (
    <div className="form-floating">
      <textarea
        className={`form-control ${css.textArea}`}
        placeholder={label}
        id="floatingTextarea"
        name={name}
      ></textarea>
      <label htmlFor="floatingTextarea">{label}</label>
    </div>
  );
}
