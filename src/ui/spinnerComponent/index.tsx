import React from "react";
import css from "./index.css";
import Spinner from "react-bootstrap/Spinner";

function SpinnerComponent() {
  return (
    <div className={css.container}>
      <Spinner animation="border" variant="danger" className={css.root} />;
    </div>
  );
}

export { SpinnerComponent };
