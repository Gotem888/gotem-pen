import { actLogIn } from "./actLogIn";
import { actAuthLogIn } from "./actAuthLogIn";
import { actFindUser } from "../search/actFindUser";

export const actFullLogIn = (login, password) => async dispatch => {
	let result = await dispatch(actLogIn(login, password));

	if (result !== null) {
		dispatch(actAuthLogIn(result));
	} 
	else {
		alert("User doesn’t exist!");
		localStorage.clear();
	}
	await dispatch(actFindUser());
};
