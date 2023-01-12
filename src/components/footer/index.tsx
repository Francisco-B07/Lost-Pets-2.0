import React from "react";
import css from "./index.css";
import github from "img/github.png";
import linkedin from "img/linkedin.png";
import logoThePanch from "img/logo-letras-blancas.png";

function Footer() {
  return (
    <div className={css.footer}>
      <a href="https://portfolio-burgoa-francisco.vercel.app/" target="_blank">
        <img src={logoThePanch} className={css.logoThePanch} />
      </a>
      <a
        href="https://www.linkedin.com/in/francisco-burgoa-0b3422227/"
        target="_blank"
      >
        <img src={linkedin} className={css.redes} />
      </a>
      <a href="https://github.com/Francisco-B07" target="_blank">
        <img src={github} className={css.redes} />
      </a>
    </div>
  );
}

export { Footer };
