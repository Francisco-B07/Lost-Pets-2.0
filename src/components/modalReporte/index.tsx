import { reportarPetVista } from "lib/pet";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { ButtonPrimary } from "ui/buttons";
import { TextArea, TextField } from "ui/textField";
import { Title } from "ui/texts";
import css from "./index.css";
import Swal from "sweetalert2";

function ModalReporte({ objectID, userId, name }) {
  const headerStyle = {
    borderBottom: "none",
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleSubmit(e) {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const telefono = e.target.telefono.value;
    const informacion = e.target.informacion.value;
    const data = await reportarPetVista(
      nombre,
      telefono,
      informacion,
      objectID,
      userId
    );
    if (data) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Reporte enviado con éxito",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error al enviar el reporte, inténtalo nuevamente",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  return (
    <>
      <p className={css.reportarInfo} onClick={handleShow}>
        Reportar INFORMACIón
      </p>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={headerStyle}></Modal.Header>
        <Modal.Body>
          <Title>Reportar info de {name}</Title>
          <form onSubmit={handleSubmit}>
            <TextField type="text" label="TU NOMBRE" name="nombre" />
            <TextField type="text" label="TU TELÉFONO" name="telefono" />
            <TextArea label="DONDE LO VISTE?" name="informacion" />
            <div className={css.contenedorButton}>
              <ButtonPrimary onClick={handleClose}>Enviar</ButtonPrimary>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export { ModalReporte };
