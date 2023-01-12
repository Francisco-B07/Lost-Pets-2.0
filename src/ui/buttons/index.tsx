import React, { useState } from "react";
import css from "./index.css";
import Spinner from "react-bootstrap/Spinner";

type ButtonPrimaryProps = {
  children: string;
  type?: any;
  onClick?: () => void;
};

export function ButtonPrimary(props: ButtonPrimaryProps) {
  const { children, type, onClick } = props;
  const [spinner, setSpinner] = useState(false);

  function handleSpinner() {
    setSpinner(true);
    onClick();
  }

  return (
    <div className={css.contenedor}>
      <button className={css.primary} type={type} onClick={handleSpinner}>
        {children}
        {spinner ? (
          <Spinner
            animation="border"
            variant="secondary"
            className={css.spinner}
          />
        ) : (
          ""
        )}
      </button>
    </div>
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
