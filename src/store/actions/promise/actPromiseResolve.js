export const actPromiseResolve = (name, payload) => ({
	type: "PROMISE",
	status: "RESOLVED",
	name,
	payload,
});
