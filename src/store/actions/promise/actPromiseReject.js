export const actPromiseReject = (name, error) => ({
	type: "PROMISE",
	status: "REJECTED",
	name,
	error,
});
