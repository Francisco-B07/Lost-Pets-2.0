import React, { useEffect, useState } from "react";
import css from "./index.css";
import { useNavigate, useParams } from "react-router-dom";
import { Title } from "ui/texts";
import { ButtonPrimary } from "ui/buttons";
import { TextField } from "ui/textField";
import { Form } from "ui/mapbox/form";
import { UploadImage } from "ui/cargarImagen";
import {
  useImagenPet,
  useImageURLPet,
  useMapboxLat,
  useMapboxLng,
  useMapboxUbicacion,
} from "hooks/pets";
import { buscarPetAEditar, editarPetPerdida } from "lib/pet";
import { Spinner } from "react-bootstrap";

function EditarMascotaReportada() {
  const params = useParams();
  const navigate = useNavigate();
  const petId = params.petId;
  const [pet, setPet] = useState(null);
  const [mapboxUbicacion, setMapboxUbicaciont] = useMapboxUbicacion();
  const [mapboxLng, setMapboxLng] = useMapboxLng();
  const [mapboxLat, setMapboxLat] = useMapboxLat();
  const [imagenPet, setImagenPet] = useImagenPet();
  const [imageURLPet, setImageURLPet] = useImageURLPet();
  const [spinnerEncontrado, setSpinnerEncontrado] = useState(false);
  const [spinnerDespublicar, setSpinnerDespublicar] = useState(false);

  async function getPet() {
    const pet = await buscarPetAEditar(petId);
    setPet(pet);
    console.log(pet);
  }

  useEffect(() => {
    getPet();
  }, []);

  async function onEditPet(e) {
    e.preventDefault();
    const nombre = e.target.nombre.value;

    const data = await editarPetPerdida(
      nombre,
      mapboxLat,
      mapboxLng,
      mapboxUbicacion,
      imagenPet,
      "",
      false,
      imageURLPet,
      pet
    );
    navigate("/mis-mascotas-reportadas");
  }
  async function onReportarEncontrado() {
    setSpinnerEncontrado(true);

    const data = await editarPetPerdida(
      pet.name,
      mapboxLat,
      mapboxLng,
      mapboxUbicacion,
      imagenPet,
      "ENCONTRADO",
      false,
      imageURLPet,
      pet
    );
    navigate("/mis-mascotas-reportadas");
  }

  async function onDespublicar() {
    setSpinnerDespublicar(true);

    const data = await editarPetPerdida(
      pet.name,
      mapboxLat,
      mapboxLng,
      mapboxUbicacion,
      imagenPet,
      "ENCONTRADO",
      true,
      imageURLPet,
      pet
    );
    navigate("/mis-mascotas-reportadas");
  }

  return (
    <div className={css.container}>
      <Title>Editar {pet?.name}</Title>
      <div className={css.body}>
        <form onSubmit={onEditPet}>
          <TextField
            type="text"
            label="NOMBRE"
            name="nombre"
            fullName={pet?.name}
          ></TextField>
          <UploadImage imageURL={pet?.imageURL} />
          <div className={css.map}>
            <Form
              ubicacion={pet?.ubicacion}
              latInicial={pet?.lat}
              lngInicial={pet?.lng}
            />
          </div>
          <p className={css.instrucciones}>
            Buscá un punto de referencia para reportar a tu mascota. Puede ser
            una dirección, un barrio o una ciudad.
          </p>
          <ButtonPrimary>Guardar</ButtonPrimary>
        </form>
        <button
          className={css.reportarEncontrado}
          onClick={onReportarEncontrado}
        >
          Reportar como encontrado{" "}
          {spinnerEncontrado ? (
            <Spinner
              animation="border"
              variant="secondary"
              className={css.spinner}
            />
          ) : (
            ""
          )}
        </button>
        <button className={css.despublicar} onClick={onDespublicar}>
          Despublicar{" "}
          {spinnerDespublicar ? (
            <Spinner
              animation="border"
              variant="secondary"
              className={css.spinner}
            />
          ) : (
            ""
          )}
        </button>
      </div>
    </div>
  );
}

export { EditarMascotaReportada };
