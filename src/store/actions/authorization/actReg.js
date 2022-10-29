import { actPromise } from "../promise/actPromise";
import { registration } from "../requests";

export const actReg = (login, password) => actPromise("reg", registration(login, password));
