import css from "./index.css";
import React, { useState, useEffect } from "react";
import { useImagenPet, useImageURLPet } from "hooks/pets";

type UploadImageProp = {
  imageURL?: string;
};

function UploadImage(props: UploadImageProp) {
  const [imagePreview, setImagePreview] = useState(null);
  const [imagenPet, setImagenPet] = useImagenPet();
  const [imageURLPet, setImageURLPet] = useImageURLPet();

  useEffect(() => {
    setImagePreview(props.imageURL);
    setImageURLPet(props.imageURL);
  }, [props.imageURL]);

  const changeImage = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = (e) => {
      e.preventDefault();
      const base64 = e.target.result.toString();

      setImagenPet(base64);
      setImagePreview(base64);
      setImageURLPet("");
    };
  };

  return (
    <div className={css.container}>
      <img src={imagePreview} className={css.imagePreview} />
      <div className={css.imageUploadWrap}>
        <input
          className={css.fileUploadInput}
          type="file"
          accept="image/*"
          onChange={(e) => {
            changeImage(e);
          }}
        />
        <p className={css.textButton}>
          {props.imageURL ? "Modificar " : "Agregar "}foto
        </p>
      </div>
    </div>
  );
}

export { UploadImage };
