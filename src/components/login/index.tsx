import React from "react";
import css from "./index.css";
import { useNavigate } from "react-router-dom";
import { ButtonPrimary } from "ui/buttons";
import { TextField } from "ui/textField";
import { useUserEmail } from "hooks/login";
import { checkEmail } from "lib/user";

function Login() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useUserEmail();

  async function submitHandler(e) {
    e.preventDefault();
    const email = e.target.email.value;
    setUserEmail(email);
    localStorage.setItem("email", email);

    const response = await checkEmail(email);
    if (response.exists) {
      navigate("/password");
    } else {
      navigate("/mis-datos");
    }
  }

  return (
    <form className={css.container} onSubmit={submitHandler}>
      <TextField type="email" name="email" label="EMAIL" />
      <ButtonPrimary>Siguiente</ButtonPrimary>
    </form>
  );
}

export { Login };
