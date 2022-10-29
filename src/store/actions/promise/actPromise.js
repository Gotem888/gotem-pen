import { actPromisePending } from "./actPromisePending";
import { actPromiseResolve } from "./actPromiseResolve";
import { actPromiseReject } from "./actPromiseReject";

export const actPromise = (name, promise) => async dispatch => {
	dispatch(actPromisePending(name));
	try {
		let payload = await promise;

		dispatch(actPromiseResolve(name, payload));

		return payload;

	} catch (error) {
		dispatch(actPromiseReject(name, error));
	}
};
