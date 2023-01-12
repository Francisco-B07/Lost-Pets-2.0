import React, { useEffect, useState } from "react";
import css from "./index.css";
import { Title } from "ui/texts";
import { buscarMisPets } from "lib/pet";
import { PetCard } from "components/petCard";

function MisMascotasReportadas() {
  const [myPets, setMyPets] = useState([]);
  async function getMyPets() {
    const myPets = await buscarMisPets();
    var myPetsNoEliminadas = [];
    for (let index = 0; index < myPets.length; index++) {
      if (myPets[index].eliminado != true) {
        myPetsNoEliminadas.push(myPets[index]);
      }
    }

    setMyPets(myPetsNoEliminadas);
  }

  useEffect(() => {
    getMyPets();
  }, []);

  return (
    <div className={css.container}>
      <Title>Mis mascotas reportadas</Title>

      <div className={css.body}>
        {myPets.map((pet) => (
          <PetCard
            src={pet.imageURL}
            name={pet.name}
            ubicacion={pet.ubicacion}
            objectID={pet.id}
            userId={pet.userId}
            encontrado={pet.encontrado}
            searchUserAdmin="true"
          />
        ))}
      </div>
    </div>
  );
}

export { MisMascotasReportadas };
