import { selectedURL, userData, userEmail } from "atoms";
import { auth } from "lib/user";
import { useRecoilState, useRecoilValue } from "recoil";
import Swal from "sweetalert2";

export const useUserData = () => useRecoilValue(userData);
export const useUserEmail = () => useRecoilState(userEmail);
export const useSelectedURL = () => useRecoilState(selectedURL);

export function useAuth() {
  async function login(email, pass) {
    try {
      const { token } = await auth(email, pass);
      localStorage.setItem("auth_token", token);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Inicio sesión con éxito",
        showConfirmButton: false,
        timer: 1500,
      });
      return true;
    } catch (e) {
      console.error("user o password incorrecto");
      Swal.fire({
        position: "center",
        icon: "error",
        title: "user o password incorrecto",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  return { login };
}
