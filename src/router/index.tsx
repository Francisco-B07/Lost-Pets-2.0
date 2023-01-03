import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "pages/home";
import { Layout } from "components/layout";
import { MisDatos } from "pages/mis-datos";
import { MisMascotasReportadas } from "pages/mis-mascotas-reportadas";
import { ReportarMascotas } from "pages/reportar-mascotas";
import { Ingresar } from "pages/ingresar";
import { Test } from "pages/test";
import { Password } from "pages/password";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="mis-datos" element={<MisDatos />} />
        <Route
          path="mis-mascotas-reportadas"
          element={<MisMascotasReportadas />}
        />
        <Route path="reportar-mascotas" element={<ReportarMascotas />} />
        <Route path="ingresar" element={<Ingresar />} />
        <Route path="password" element={<Password />} />
        <Route path="test" element={<Test />} />
      </Route>
    </Routes>
  );
}

export { AppRoutes };
