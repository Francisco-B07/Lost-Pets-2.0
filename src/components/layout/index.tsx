import { Footer } from "components/footer";
import { Header } from "components/header";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export { Layout };
