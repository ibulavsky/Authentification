import {apiAuthentication} from "../DAL/api-request";

export const SET_AUTHENTICATION = 'TEST-APP/SET_AUTHENTICATION';
export const AUTHENTICATION_RESULT = 'TEST-APP/AUTHENTICATION_RESULT';
export const SET_USERNAME = 'TEST-APP/SET_USERNAME';

const initialState = {
    isAuthentication: false,
    authenticationError: false,
    username: '',
};

const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHENTICATION:
            return {
                ...state,
                isAuthentication: action.isAuthentication,
            };
        case AUTHENTICATION_RESULT:
            return {
                ...state,
                authenticationError: action.authenticationError,
            };
        case SET_USERNAME:
            return {
                ...state,
                username: action.username,
            };
        default:
            return state
    }
};

export default authenticationReducer;

// ACTION CREATORS:
export const setAuthentication = (isAuthentication) => (
    {type: SET_AUTHENTICATION, isAuthentication}
);
export const setUserName = (username) => (
    {type: SET_USERNAME, username}
);

export const authenticationError = (authenticationError) => (
    {type: AUTHENTICATION_RESULT, authenticationError}
);

// THUNK CREATORS:
export const login = (username, password) => (dispatch) => {
    apiAuthentication.login(username, password)
        .then(() => {
                dispatch(setAuthentication(true));
                dispatch(setUserName(username));
            }
        )
        .catch(() => dispatch(authenticationError(true)));
};

export const logout = () => (dispatch) => {
    apiAuthentication.logout().then(() => {
        dispatch(setAuthentication(false));
        dispatch(setUserName(''));
    })
};
