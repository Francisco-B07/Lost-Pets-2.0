const API_BASE_URL = "https://lost-pets.up.railway.app";

// -------------- SIGNUP --------------
export async function signUp(email, fullName, password) {
  const res = await fetch(API_BASE_URL + "/auth", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      fullName: fullName,
      password: password,
    }),
  });
  const data = await res.json();
}

// -------------- CHECK USER EXIST--------------
export async function checkEmail(email) {
  const res = await fetch(API_BASE_URL + "/check/email", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email: email }),
  });

  const data = await res.json();

  return { exists: data.userExist };
}

// -------------- SIGNIN --------------
export async function auth(email, password) {
  const res = await fetch(API_BASE_URL + "/auth/token", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  const data = await res.json();

  return { token: data.token };
}

// -------------- OBTENGO MI INFORMACIÓN --------------
export async function getMe() {
  const token = localStorage.getItem("auth_token");
  const res = await fetch(API_BASE_URL + "/me", {
    method: "get",
    headers: {
      Authorization: "bearer " + token,
    },
  });
  const data = await res.json();

  return data;
}

// -------------- EDITAR USUARIO --------------
export async function editarUser(email, fullName, password) {
  const res = await fetch(API_BASE_URL + "/user", {
    method: "put",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      fullName: fullName,
      password: password,
    }),
  });
  const data = await res.json();
}
