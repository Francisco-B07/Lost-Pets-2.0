import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "pages/home";
import { Layout } from "components/layout";
import { MisDatos } from "pages/misDatos";
import { MisMascotasReportadas } from "pages/myPetsReportadas";
import { ReportarMascotas } from "pages/reportarPet";
import { Ingresar } from "pages/login";
import { PasswordPage } from "pages/login/password";
import { EditarMascotaReportada } from "pages/editarPetReportada";
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
        <Route
          path="editar-mascota-reportada/:petId"
          element={<EditarMascotaReportada />}
        />
        <Route path="ingresar" element={<Ingresar />} />
        <Route path="password" element={<PasswordPage />} />
      </Route>
    </Routes>
  );
}

export { AppRoutes };
