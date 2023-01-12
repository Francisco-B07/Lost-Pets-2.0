import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { RecoilRoot } from "recoil";
import { SpinnerComponent } from "ui/spinnerComponent";

function RootApp() {
  return (
    <Suspense fallback={<SpinnerComponent />}>
      <RecoilRoot>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </RecoilRoot>
    </Suspense>
  );
}

ReactDOM.render(<RootApp />, document.getElementById("root"));
