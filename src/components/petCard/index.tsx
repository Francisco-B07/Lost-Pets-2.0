import React from "react";
import { useNavigate } from "react-router-dom";
import { ModalReporte } from "components/modalReporte";
import css from "./index.css";
import pencil from "img/pencil.svg";

type PetCardProps = {
  src: string;
  name: string;
  ubicacion: string;
  objectID: string;
  userId: number;
  encontrado?: string;
  searchUserAdmin: string;
};

function PetCard(props: PetCardProps) {
  const navigate = useNavigate();

  const {
    src,
    name,
    ubicacion,
    objectID,
    userId,
    encontrado,
    searchUserAdmin,
  } = props;

  function goEdit() {
    navigate("/editar-mascota-reportada/" + objectID);
  }

  return (
    <div className={css.container}>
      <img src={src} className={css.imagen} />
      <div className={css.footer}>
        <div>
          <h3 className={css.namePet}>{name}</h3>
          <p className={css.ubicacion}>{ubicacion}</p>
        </div>
        {searchUserAdmin ? (
          <div className={css.contenedorEditar}>
            <img src={pencil} onClick={goEdit} />
            <p className={css.mensajeEncontrado}>{encontrado}</p>
          </div>
        ) : (
          <div className={css.contenedorReportarInfo}>
            <ModalReporte objectID={objectID} userId={userId} name={name} />
          </div>
        )}
      </div>
    </div>
  );
}

export { PetCard };
