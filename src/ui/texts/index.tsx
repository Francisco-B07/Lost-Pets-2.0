import React from "react";
import css from "./index.css";

export function Title({ children }) {
  return <h1 className={css.title}>{children}</h1>;
}

export function Body({ children }) {
  return <p className={css.body}>{children}</p>;
}
