import React, { useState } from "react";
import { MapboxSeach } from "./mapbox-search";

type FormProp = {
  ubicacion?: string;
  latInicial?: number;
  lngInicial?: number;
};

export function Form(props: FormProp) {
  const [formData, setFormData] = useState({});

  function submitHandler(e) {
    e.preventDefault();
  }
  function handleMapboxChange(data) {
    // voy agregando data al state interno del form
    setFormData({
      ...formData,
      mapbox: data,
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <MapboxSeach
        onChange={handleMapboxChange}
        latInicial={props.latInicial}
        lngInicial={props.lngInicial}
        ubicacion={props.ubicacion}
      />
    </form>
  );
}
