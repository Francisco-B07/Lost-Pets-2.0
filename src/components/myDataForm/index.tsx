import React from "react";
import css from "./index.css";
import { Link } from "react-router-dom";
import { ButtonPrimary } from "ui/buttons";
import { TextField } from "ui/text-field";

function MyDataForm() {
  function handleSubmit(e) {
    e.preventDefault();
    const nombre = e.target.name.value;
    const password = e.target.password.value;
    const repetirPassword = e.target.repetirPassword.value;
  }

  return (
    <form className={css.container} onSubmit={handleSubmit}>
      <TextField type="string" name="nombre" label="NOMBRE" />
      <TextField type="password" name="password" label="CONTRASEÑA" />
      <TextField
        type="password"
        name="repetirPassword"
        label="REPETIR CONTRASEÑA"
      />
      <Link to="/">
        <div className={css.button}>
          <ButtonPrimary type="submit">Guardar</ButtonPrimary>
        </div>
      </Link>
    </form>
  );
}

export { MyDataForm };
