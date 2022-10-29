import { gql } from "./gql";

export const login = async (_login, password) => {
	const query = `query login($login:String!, $password:String!) {
      login(
         login: $login,
         password: $password
      )
   }`;

	const token = await gql(query, { login: _login, password });
	localStorage.authToken = token.data.login;

	console.log(token);
	return token.data.login;
};

export const registration = async (login, password) => {
	const query = `mutation reg($login:String!, $password:String!) {
      createUser(
         login: $login,
         password: $password
      ) {
         _id
      }
   }`;

	return await gql(query, { login, password });
};

export const findImage = async () => {
	const query = `query imgFind {
      ImageFind(query:"[{}]") {
         url owner {
            nick
         }
      }
   }`;

	return await gql(query);
};

export const findUser = async _id => {
	const query = `query userOne($query:String) {
      UserFindOne(query:$query) {
         _id  avatar {
            url
         }
      }
   }`;

	return await gql(query, { query: JSON.stringify([{ _id }]) });
};

export const setAvatar = async (idUser, idAvatar) => {
	const query = `mutation setAvatar($idUser:String , $idAvatar:ID) { 
      UserUpsert(user:{_id: $idUser, avatar: {_id: $idAvatar}}) {
         _id, avatar {
            url
         }
      }
   }`;

	return await gql(query, { idUser, idAvatar });
};

export const addSnippet = async (title, description, files, idSnippet) => {
	const query = `mutation newSnippet($snippet:SnippetInput) {
      SnippetUpsert(snippet:$snippet){
        _id
      }
   }`;

	return await gql(query, {
		snippet: { title, description, files, _id: idSnippet },
	});
};

export const getSnippetById = async _id => {
	const query = `query snippetFind($query:String) {
      SnippetFind(query:$query) {
         owner {
            _id
         }
         title description _id files {
            type text name
         }
      }
   }`;

	return await gql(query, { query: JSON.stringify([{ _id }]) });
};

export const getSnippetByOwnerId = async id => {
	const query = `query snippetFind($query:String) {
      SnippetFind(query:$query) {
         owner {
            _id
         }
         title description _id files {
            type text name
         }
      }
   }`;

	return await gql(query, {
		query: JSON.stringify([{ ___owner: id }, { sort: [{ _id: -1 }] }]),
	});
};

export const search = async string => {
	const query = `query snippetFind($query:String) {
      SnippetFind(query:$query) {
         owner {
            _id login
         }
         title description _id files {
            type text name
         }
      }
   }`;

	return await gql(query, {
		query: JSON.stringify([
			{
				$or: [
					{ title: `/${string.trim().split(" ").join("|")}/` },
					{ description: `/${string.trim().split(" ").join("|")}/` },
				],
			},
			{
				sort: [{ title: 1 }],
			},
		]),
	});
};
