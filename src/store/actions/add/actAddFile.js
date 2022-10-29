import { actPromise } from "../promise/actPromise";

export const actAddFile = files => async dispatch => {
	let fd = new FormData();
	fd.append("photo", files);
	return await dispatch(
		actPromise(
			"upload",
			fetch("/upload", {
				method: "POST",
				headers: localStorage.authToken ? { Authorization: "Bearer " + localStorage.authToken } : {},
				body: fd,
			}).then(res => res.json()),
		),
	);
};
