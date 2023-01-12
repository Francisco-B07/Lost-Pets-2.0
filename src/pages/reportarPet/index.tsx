import React from "react";
import css from "./index.css";
import { useNavigate } from "react-router-dom";
import { Title } from "ui/texts";
import { ButtonPrimary } from "ui/buttons";
import { TextField } from "ui/textField";
import { Form } from "ui/mapbox/form";
import { UploadImage } from "ui/cargarImagen";
import {
  useImagenPet,
  useMapboxLat,
  useMapboxLng,
  useMapboxUbicacion,
} from "hooks/pets";
import { reportarPetPerdida } from "lib/pet";

function ReportarMascotas() {
  const navigate = useNavigate();
  const initialCoords: any = [-68.5292228, -31.5346781];

  const [mapboxUbicacion, setMapboxUbicaciont] = useMapboxUbicacion();
  const [mapboxLng, setMapboxLng] = useMapboxLng();
  const [mapboxLat, setMapboxLat] = useMapboxLat();
  const [imagenPet, setImagenPet] = useImagenPet();

  function cancelar() {
    navigate("/");
  }

  async function reportar(e) {
    e.preventDefault();

    const nombre = e.target.nombre.value;

    const data = await reportarPetPerdida(
      nombre,
      mapboxLat,
      mapboxLng,
      mapboxUbicacion,
      imagenPet,
      "",
      false
    );
    navigate("/mis-mascotas-reportadas");
  }

  return (
    <div className={css.container}>
      <Title>Reportar mascota perdida</Title>
      <div className={css.body}>
        <form onSubmit={reportar}>
          <TextField type="text" label="NOMBRE" name="nombre" />
          <UploadImage />
          <div className={css.map}>
            <Form />
          </div>
          <p className={css.instrucciones}>
            Buscá un punto de referencia para reportar a tu mascota. Puede ser
            una dirección, un barrio o una ciudad.
          </p>
          <ButtonPrimary>Reportar como perdido</ButtonPrimary>
        </form>
        <button className={css.buttonCancelar} onClick={cancelar}>
          Cancelar
        </button>
      </div>
    </div>
  );
}

export { ReportarMascotas };
