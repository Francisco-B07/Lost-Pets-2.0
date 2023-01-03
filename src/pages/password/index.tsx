import React from "react";
import css from "./index.css";
import { Title } from "ui/texts";
import { LoginForm } from "components/loginForm";

function Password() {
  return (
    <div className={css.container}>
      <Title>Ingresar</Title>
      <div className={css.form}>
        <LoginForm
          type="password"
          name="password"
          label="CONTRASEÑA"
          to="/"
          buttonText="Ingresar"
        />
      </div>
    </div>
  );
}

export { Password };
