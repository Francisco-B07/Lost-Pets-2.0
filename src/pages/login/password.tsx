import React from "react";
import css from "./index.css";
import { Title } from "ui/texts";
import { Password } from "components/login/password";

function PasswordPage() {
  return (
    <div className={css.container}>
      <Title>Ingresar</Title>
      <div className={css.form}>
        <Password />
      </div>
    </div>
  );
}

export { PasswordPage };
