const getGQL = url => (query, variables) =>
	fetch(url, {
		method: "POST",
		headers: {
			"content-type": "application/json",
			...(localStorage.authToken ? { Authorization: "Bearer " + localStorage.authToken } : {}),
		},
		body: JSON.stringify({ query, variables }),
	}).then(res => res.json());

export const gql = getGQL("/graphql");
