import { actPromise } from "../promise/actPromise";
import { addSnippet } from "../requests";

export const actAddSnippet = (title, description, files, idSnippet) => async dispatch => {
	return await dispatch(actPromise("addSnippet", addSnippet(title, description, files, idSnippet)));
};
