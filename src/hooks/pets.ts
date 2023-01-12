import {
  imagenPet,
  imageURLPet,
  mapboxLat,
  mapboxLng,
  mapboxUbicacion,
  petsNearby,
} from "atoms";
import { useRecoilState } from "recoil";

// -------------------------HOOKS Buscar mascotas perdidas cerca que no esten encontradas ni eliminadas-------------------------
export const usePetsNearby = () => useRecoilState(petsNearby);

// -------------------------HOOKS REPORTAR PET PERDIDA-------------------------
export const useMapboxLat = () => useRecoilState(mapboxLat);
export const useMapboxLng = () => useRecoilState(mapboxLng);
export const useMapboxUbicacion = () => useRecoilState(mapboxUbicacion);

export const useImagenPet = () => useRecoilState(imagenPet);
export const useImageURLPet = () => useRecoilState(imageURLPet);
