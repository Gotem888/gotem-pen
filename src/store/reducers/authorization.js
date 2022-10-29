// import { decode as atob } from "base-64";

let signatureToken = (token) => JSON.parse(atob(token.split(".")[1]));

function authReducer(state, { type, token }) {
  if (state === undefined) {
    if (localStorage.authToken) {
      type = "LOGIN";
      token = localStorage.authToken;
    } else {
      return {};
    }
  }

  if (type === "LOGIN") {
    console.log("LOGIN");
    localStorage.authToken = token;
    return { token, payload: signatureToken(token) };
  }

  if (type === "LOGOUT") {
    console.log("LOGOUT");
    localStorage.removeItem("authToken");
    return {};
  }

  return state;
}

export default authReducer;
