import React from "react";
import css from "./index.css";
import { Title } from "ui/texts";
import { LoginForm } from "components/loginForm";

function Ingresar() {
  return (
    <div className={css.container}>
      <Title>Ingresar</Title>
      <div className={css.form}>
        <LoginForm
          type="email"
          name="email"
          label="EMAIL"
          to="/password"
          buttonText="Siguiente"
        />
      </div>
    </div>
  );
}

export { Ingresar };
