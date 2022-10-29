import { actPromise } from "../promise/actPromise";
import { login } from "../requests";

export const actLogIn = (_login, password) => actPromise("login", login(_login, password));
