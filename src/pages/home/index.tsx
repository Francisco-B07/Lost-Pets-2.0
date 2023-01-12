import React, { useState } from "react";
import css from "./index.css";
import { Body, Title } from "ui/texts";
import { ButtonPrimary } from "ui/buttons";
import { PetsNearby } from "components/petsNearby";
import { usePetsNearby } from "hooks/pets";
import { buscarPetsCerca } from "lib/pet";

function Home() {
  const [ubicacion, setUbicacion] = useState(false);
  const [petsNearby, setPetsNearby] = usePetsNearby();

  function onListPets() {
    var petsAux = [];

    navigator.geolocation.getCurrentPosition(async (position) => {
      const pets = await buscarPetsCerca(
        position.coords.longitude,
        position.coords.latitude
      );

      for (let index = 0; index < pets.length; index++) {
        if (pets[index].eliminado != true && pets[index].encontrado == "") {
          petsAux.push(pets[index]);
        }
      }

      setPetsNearby(petsAux);
    });

    setUbicacion(true);
  }

  return (
    <div className={css.container}>
      <Title>Mascotas perdidas cerca tuyo</Title>
      <div className={`${ubicacion ? css.noBody : css.body}`}>
        <Body>
          Para ver las mascotas reportadas cerca tuyo necesitamos permiso para
          conocer tu ubicación.
        </Body>
        <ButtonPrimary onClick={onListPets}>Dar mi ubicación</ButtonPrimary>
      </div>
      <div className={`${ubicacion ? css.body : css.noBody}`}>
        <PetsNearby />
      </div>
    </div>
  );
}

export { Home };
