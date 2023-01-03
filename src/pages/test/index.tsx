import React, { useState } from "react";
import css from "./index.css";
import { Title } from "ui/texts";
import { MyDataForm } from "components/myDataForm";

function Test() {
  return (
    <div className={css.container}>
      <Title>Mis datos</Title>
      <div className={css.form}>
        <MyDataForm />
      </div>
    </div>
  );
}

export { Test };
