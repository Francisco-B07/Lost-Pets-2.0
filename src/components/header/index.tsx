import React, { useState } from "react";
import css from "./index.css";
import logo from "img/logo.svg";
import { Link } from "react-router-dom";
import { BurguerButtons } from "ui/buttons";

function Header() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <header className={css.header}>
      <div className={css.navbar}>
        <Link to="/">
          <img src={logo} className={css.imagen} />
        </Link>
        <BurguerButtons clicked={clicked} handleClick={handleClick} />
      </div>
      <div className={`${css.nav} ${clicked ? "" : css.inactive}`}>
        <Link to="mis-datos" className={css.navLink} onClick={handleClick}>
          Mis datos
        </Link>
        <Link
          to="mis-mascotas-reportadas"
          className={css.navLink}
          onClick={handleClick}
        >
          Mis mascotas <br /> reportadas
        </Link>
        <Link
          to="reportar-mascotas"
          className={css.navLink}
          onClick={handleClick}
        >
          Reportar <br /> Mascotas
        </Link>
        <div className={css.userContainer}>
          <p className={css.user}>email</p>

          <Link to="/" className={css.cerrarSesion} onClick={handleClick}>
            CERRAR SESIÓN
          </Link>
        </div>
      </div>
    </header>
  );
}

export { Header };
