import React from "react";
import css from "./index.css";

type ButtonPrimaryProps = {
  children: string;
  type?: any;
};

export function ButtonPrimary(props: ButtonPrimaryProps) {
  const { children, type } = props;
  return (
    <button className={css.primary} type={type}>
      {children}
    </button>
  );
}
export function BurguerButtons({ clicked, handleClick }) {
  return (
    <div
      onClick={handleClick}
      className={`${css.burguer} ${clicked ? css.open : ""}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
