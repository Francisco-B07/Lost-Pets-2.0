import React, { useState } from "react";
import css from "./index.css";
import { Link } from "react-router-dom";
import { Body, Title } from "ui/texts";
import { ButtonPrimary } from "ui/buttons";

function Home() {
  return (
    <div className={css.container}>
      <Title>Mascotas perdidas cerca tuyo</Title>
      <div className={css.body}>
        <Body>
          Para ver las mascotas reportadas cerca tuyo necesitamos permiso para
          conocer tu ubicación.
        </Body>
        <ButtonPrimary>Dar mi ubicación</ButtonPrimary>
      </div>
    </div>
  );
}

export { Home };
