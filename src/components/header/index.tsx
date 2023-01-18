import React, { useState } from "react";
import css from "./index.css";
import logo from "img/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { BurguerButtons } from "ui/buttons";
import { useSelectedURL, useUserData } from "hooks/login";

function Header() {
  const token = localStorage.getItem("auth_token");

  const email = localStorage.getItem("email");
  const [clicked, setClicked] = useState(false);
  const [selectedURL, setSelectedURL] = useSelectedURL();
  const navigate = useNavigate();
  // var dataUser = useUserData();
  // console.log(dataUser);

  function handleClick(page: string) {
    setClicked(!clicked);
    if (token) {
      navigate("/" + page);
    } else {
      setSelectedURL(page);
      navigate("/ingresar");
    }
  }

  function clickBurguerButtons() {
    setClicked(!clicked);
  }

  function cerrarSesion() {
    if (localStorage.getItem("auth_token")) {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("email");
    }
    navigate("/");
  }

  return (
    <header className={css.header}>
      <div className={css.navbar}>
        <Link to="/">
          <img src={logo} className={css.imagen} />
        </Link>
        <BurguerButtons clicked={clicked} handleClick={clickBurguerButtons} />
      </div>
      <div className={`${css.nav} ${clicked ? "" : css.inactive}`}>
        <a className={css.navLink} onClick={() => handleClick("mis-datos")}>
          Mis datos
        </a>
        <a
          className={css.navLink}
          onClick={() => handleClick("mis-mascotas-reportadas")}
        >
          Mis mascotas <br /> reportadas
        </a>
        <a
          className={css.navLink}
          onClick={() => handleClick("reportar-mascotas")}
        >
          Reportar <br /> Mascotas
        </a>
        <div className={css.userContainer}>
          <p className={css.user}>{token ? email : ""}</p>

          <a
            className={`${token ? css.cerrarSesion : css.inactiveCerrarSesion}`}
            onClick={cerrarSesion}
          >
            CERRAR SESIÓN
          </a>
        </div>
      </div>
    </header>
  );
}

export { Header };
