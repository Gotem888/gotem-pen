import { search } from "../requests";
import { actPromise } from "../promise/actPromise";

export const actSearch = string => async dispatch => {
	return await dispatch(actPromise("searchSnippet", search(string)));
};
