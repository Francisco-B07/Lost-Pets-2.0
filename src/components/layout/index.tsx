import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { SearchForm } from "../SearchForm";
import css from "./Layout.css";

function Layout() {
  return (
    <div className={css.root}>
      <header>
        <SearchForm />
      </header>
      <Outlet></Outlet>
      <footer>Soy el footer</footer>
    </div>
  );
}

export { Layout };
