import { actPromise } from "../promise/actPromise";
import { getSnippetByOwnerId } from "../requests";

export const actFindSnippet = id => async dispatch => {
	return await dispatch(actPromise("findSnippet", getSnippetByOwnerId(id)));
};
