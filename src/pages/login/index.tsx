import React from "react";
import css from "./index.css";
import { Title } from "ui/texts";
import { Login } from "components/login";

function Ingresar() {
  return (
    <div className={css.container}>
      <Title>Ingresar</Title>
      <div className={css.form}>
        <Login />
      </div>
    </div>
  );
}

export { Ingresar };
