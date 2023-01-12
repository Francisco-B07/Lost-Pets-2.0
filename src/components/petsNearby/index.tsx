import React from "react";
import css from "./index.css";
import { usePetsNearby } from "hooks/pets";
import { PetCard } from "components/petCard";

function PetsNearby() {
  const [petsNearby, setPetsNearby] = usePetsNearby();

  return (
    <div className={css.container}>
      {petsNearby.map((pet) => (
        <PetCard
          src={pet.imageURL}
          name={pet.name}
          ubicacion={pet.ubicacion}
          objectID={pet.objectID}
          userId={pet.userId}
          searchUserAdmin=""
        />
      ))}
    </div>
  );
}

export { PetsNearby };
