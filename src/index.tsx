import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { RecoilRoot } from "recoil";
import { SpinnerComponent } from "ui/spinnerComponent";

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(
  <Suspense fallback={<SpinnerComponent />}>
    <RecoilRoot>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </RecoilRoot>
  </Suspense>
);
