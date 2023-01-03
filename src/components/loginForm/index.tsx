import React from "react";
import css from "./index.css";
import { Link } from "react-router-dom";
import { Title } from "ui/texts";
import { ButtonPrimary } from "ui/buttons";
import { TextField } from "ui/text-field";

type LoginFormProps = {
  type: string;
  name: string;
  label: string;
  to: string;
  buttonText: string;
};

function LoginForm(props: LoginFormProps) {
  const { type, name, label, to, buttonText } = props;
  return (
    <form className={css.container}>
      <TextField type={type} name={name} label={label} />
      <Link to={to}>
        <ButtonPrimary type="submit">{buttonText}</ButtonPrimary>
      </Link>
    </form>
  );
}

export { LoginForm };
