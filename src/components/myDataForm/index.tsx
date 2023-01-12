import React, { useState } from "react";
import css from "./index.css";
import { useNavigate } from "react-router-dom";
import { ButtonPrimary } from "ui/buttons";
import { TextField } from "ui/textField";
import { useUserData, useUserEmail } from "hooks/login";
import { editarUser, signUp } from "lib/user";
import Swal from "sweetalert2";

function MyDataForm() {
  const navigate = useNavigate();
  const token = localStorage.getItem("auth_token");
  const userData = useUserData();
  const [userEmail, setUserEmail] = useUserEmail();

  function handleSubmit(e) {
    e.preventDefault();
    const fullName = e.target.fullName.value;
    const password = e.target.password.value;
    const repetirPassword = e.target.repetirPassword.value;

    if (!token && password == repetirPassword) {
      if (!fullName || !password || !repetirPassword) {
        Swal.fire({
          position: "center",
          icon: "info",
          title: "Debe completar todos los campos para continuar",
          showConfirmButton: false,
          timer: 2500,
        });
      } else {
        signUp(userEmail, fullName, password);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "BIENVENIDO!!",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate("/");
      }
    } else {
      if (password != repetirPassword) {
        Swal.fire({
          position: "center",
          icon: "info",
          title: "Las contraseñas ingresadas no coinciden",
          showConfirmButton: false,
          timer: 2500,
        });
      } else {
        if (!password) {
          editarUser(userData.email, fullName, "");
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Usuario editado con éxito!",
            showConfirmButton: false,
            timer: 1500,
          });

          navigate("/");
        } else {
          editarUser(userData.email, fullName, password);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Usuario editado con éxito!",
            showConfirmButton: false,
            timer: 1500,
          });

          navigate("/");
        }
      }
    }
  }

  return (
    <form className={css.container} onSubmit={handleSubmit}>
      <TextField
        type="string"
        name="fullName"
        label="NOMBRE"
        fullName={token ? userData.fullName : ""}
      />

      <TextField type="password" name="password" label="CONTRASEÑA" />
      <TextField
        type="password"
        name="repetirPassword"
        label="REPETIR CONTRASEÑA"
      />

      <div className={css.button}>
        <ButtonPrimary type="submit">Guardar</ButtonPrimary>
      </div>
    </form>
  );
}

export { MyDataForm };
