import { getMe } from "lib/user";
import { atom, selector } from "recoil";

// ------------------------- LOGIN-------------------------
export const userEmail = atom({
  key: "userEmail",
  default: "",
});
export const userData = selector({
  key: "userData",
  get: async ({ get }) => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      const myUserData = await getMe();
      return myUserData;
    }
  },
});

// -------------------------GUARDO MASCOTAS CERCA-------------------------

export const petsNearby = atom({
  key: "petsNearby",
  default: [],
});

// -------------------------SI NO ESTOY LOGUEADO GUARDO LA URL DEL NAV PARA IR DESPUES DE LOGUEARME-------------------------

export const selectedURL = atom({
  key: "selectedURL",
  default: "",
});

// -------------------------VALORES DE MAPBOX-------------------------
export const mapboxLat = atom({
  key: "mapboxLat",
  default: 0,
});
export const mapboxLng = atom({
  key: "mapboxLng",
  default: 0,
});
export const mapboxUbicacion = atom({
  key: "mapboxUbicacion",
  default: "",
});

// -------------------------IMAGEN DE LA MASCOTA A REPORTAR-------------------------
export const imagenPet = atom({
  key: "imagenPet",
  default: "",
});
export const imageURLPet = atom({
  key: "imageURLPet",
  default: "",
});
