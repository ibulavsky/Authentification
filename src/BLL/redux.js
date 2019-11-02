import {combineReducers, createStore} from "redux";
import authenticationReducer from "./authenticationReducer";
import postsReducer from "./postsReducer";

const reducers = combineReducers({
    authentication: authenticationReducer,
    posts: postsReducer,
});

const store = createStore(reducers);
export default store;
