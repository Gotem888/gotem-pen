import { actPromise } from "../promise/actPromise";
import { findUser } from "../requests";

export const actFindUser = () => async (dispatch, getState) => {
	return await dispatch(actPromise("findUser", findUser(getState()?.auth?.payload?.sub?.id)));
};
