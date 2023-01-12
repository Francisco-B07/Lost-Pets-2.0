const API_BASE_URL = "https://lost-pets.up.railway.app";

// -------------- CREAR PET --------------
export async function reportarPetPerdida(
  namePet,
  lat,
  lng,
  ubicacion,
  imageDataURL,
  encontrado,
  eliminado
) {
  const token = localStorage.getItem("auth_token");
  const res = await fetch(API_BASE_URL + "/pets", {
    method: "post",
    headers: {
      "content-type": "application/json",
      Authorization: "bearer " + token,
    },
    body: JSON.stringify({
      name: namePet,
      lat: lat,
      lng: lng,
      ubicacion: ubicacion,
      imageDataURL: imageDataURL,
      encontrado: encontrado,
      eliminado: eliminado,
    }),
  });

  const data = await res.json();
  return data;
}

// -------------- ACTUALIZAR MASCOTA --------------
export async function editarPetPerdida(
  namePet,
  lat,
  lng,
  ubicacion,
  imageDataURL,
  encontrado,
  eliminado,
  imageURL,
  petAEditar
) {
  const token = localStorage.getItem("auth_token");
  const res = await fetch(API_BASE_URL + "/pets/" + petAEditar.id, {
    method: "put",
    headers: {
      "content-type": "application/json",
      Authorization: "bearer " + token,
    },
    body: JSON.stringify({
      name: namePet,
      lat: lat,
      lng: lng,
      ubicacion: ubicacion,
      imageDataURL: imageDataURL,
      imageURL: imageURL,
      encontrado: encontrado,
      eliminado: eliminado,
    }),
  });

  const data = await res.json();
}

// -------------- CREAR REPORTE--------------
export async function reportarPetVista(
  reporteNombre,
  reporteTelefono,
  reporteInfo,
  petId,
  reporteUserId
) {
  const res = await fetch(API_BASE_URL + "/reporte", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      reporteNombre: reporteNombre,
      reporteTelefono: reporteTelefono,
      reporteInfo: reporteInfo,
      petId: petId,
      userId: reporteUserId,
    }),
  });

  const data = await res.json();
  return data;
}

// -------------- OBTENER UNA MASCOTA CERCA DE--------------
export async function buscarPetsCerca(lng, lat) {
  const res = await fetch(
    API_BASE_URL + "/pets-cerca-de?lat=" + lat + "&lng=" + lng
  );

  const data = await res.json();

  return data;
}

// -------------- OBTENER TODAS LAS MASCOTAS DE UN USUARIO--------------
export async function buscarMisPets() {
  const token = localStorage.getItem("auth_token");

  const res = await fetch(API_BASE_URL + "/me/pets", {
    headers: {
      Authorization: "bearer " + token,
    },
  });

  const data = await res.json();
  return data;
}

// -------------- OBTENER UNA MASCOTA --------------
export async function buscarPetAEditar(petId) {
  const token = localStorage.getItem("auth_token");

  const res = await fetch(API_BASE_URL + "/pets/" + petId, {
    headers: {
      Authorization: "bearer " + token,
    },
  });

  const data = await res.json();
  return data;
}
