import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import authReducer from "./authorization";
import promiseReducer from "./promise";

import { actFindSnippet } from "../actions/search/actFindSnippet";
import { actFindUser } from "../actions/search/actFindUser";

let reducers = combineReducers({
	promise: promiseReducer,
	auth: authReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));

if (localStorage.authToken) {
	store.dispatch(actFindUser());
	store.dispatch(actFindSnippet(store.getState().auth.payload.sub.id));
}

export default store;
