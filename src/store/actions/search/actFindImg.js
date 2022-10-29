import { actPromise } from "../promise/actPromise";
import { findImage } from "../requests";

export const actFindImg = () => async dispatch => {
	return await dispatch(actPromise("img", findImage()));
};
