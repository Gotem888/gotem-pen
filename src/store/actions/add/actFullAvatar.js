import { actAddFile } from "./actAddFile";
import { actAddAvatar } from "./actAddAvatar";
import { actFindUser } from "../search/actFindUser";

export const actFullAvatar = file => async dispatch => {
	let result = await dispatch(actAddFile(file));
	
	await dispatch(actAddAvatar(result._id));
	await dispatch(actFindUser());
};
