import React from "react";
import css from "./index.css";
import { useNavigate } from "react-router-dom";
import { ButtonPrimary } from "ui/buttons";
import { TextField } from "ui/textField";
import { useAuth, useSelectedURL, useUserEmail } from "hooks/login";
import Swal from "sweetalert2";

function Password() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useUserEmail();
  const [selectedURL, setSelectedURL] = useSelectedURL();

  const { login } = useAuth();

  async function submitHandler(e) {
    e.preventDefault();
    const password = e.target.password.value;

    if (userEmail && password) {
      const authRes = await login(userEmail, password);
      if (authRes) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login exitoso",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/" + selectedURL);
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Hubo un error, inténtalo nuevamente",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      }
    }
  }

  return (
    <form className={css.container} onSubmit={submitHandler}>
      <TextField type="password" name="password" label="CONTRASEÑA" />
      <ButtonPrimary type="submit">Ingresar</ButtonPrimary>
    </form>
  );
}

export { Password };
