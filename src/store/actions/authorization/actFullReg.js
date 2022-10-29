import { actReg } from "./actReg";
import { actFullLogIn } from "./actFullLogIn";

export const actFullReg = (login, password) => async dispatch => {
	let result = await dispatch(actReg(login, password));

	if (result?.data?.createUser !== null) {
		dispatch(actFullLogIn(login, password));
	} 
	else {
		alert("User already exists!");
	}
};
