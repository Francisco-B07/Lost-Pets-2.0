import React, { useState } from "react";
import { Container } from "react-bootstrap";
import css from "./index.css";
import { Link } from "react-router-dom";
import { Body, Title } from "ui/texts";
import { ButtonPrimary } from "ui/buttons";

function MisMascotasReportadas() {
  return (
    <div className={css.container}>
      <Title>Mascotas perdidas cerca tuyo</Title>
      <div className={css.body}>
        <Body>Mis datos</Body>
        <ButtonPrimary>Dar mi ubicación</ButtonPrimary>
      </div>
    </div>
  );
}

export { MisMascotasReportadas };
