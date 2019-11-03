import {applyMiddleware, combineReducers, createStore} from "redux";
import authenticationReducer from "./authenticationReducer";
import postsReducer from "./postsReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    authentication: authenticationReducer,
    posts: postsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));
export default store;
