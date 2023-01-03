import React from "react";
import css from "./index.css";
import github from "img/github.png";
import linkedin from "img/linkedin.png";
import logoThePanch from "img/logo-letras-blancas.png";

function Footer() {
  return (
    <div className={css.footer}>
      <img src={logoThePanch} className={css.logoThePanch} />
      <img src={linkedin} className={css.redes} />
      <img src={github} className={css.redes} />
    </div>
  );
}

export { Footer };
