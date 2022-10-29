import { actPromise } from "../promise/actPromise";
import { setAvatar } from "../requests";

export const actAddAvatar = id => async (dispatch, getState) => {
	return await dispatch(actPromise("setAvatar", setAvatar(getState()?.auth?.payload?.sub?.id, id)));
};
