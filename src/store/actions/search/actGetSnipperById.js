import { actPromise } from "../promise/actPromise";
import { getSnippetById } from "../requests";

export const actGetSnipperById = _id => async dispatch => {
	return await dispatch(actPromise("findSnippetById", getSnippetById(_id)));
};
