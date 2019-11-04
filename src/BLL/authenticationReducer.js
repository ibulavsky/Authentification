import {apiAuthentication} from "../DAL/api_auth-request";

export const SET_AUTHENTICATION = 'TEST-APP/SET_AUTHENTICATION';
export const AUTHENTICATION_ERROR = 'TEST-APP/AUTHENTICATION_ERROR';
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
        case AUTHENTICATION_ERROR:
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

export const authenticationFalse = (authenticationError) => (
    {type: AUTHENTICATION_ERROR, authenticationError}
);

// THUNK CREATORS:
export const login = (username, password) => (dispatch) => {
    return apiAuthentication.login(username, password)
        .then((response) => {
                if (response.result === 0) {
                    dispatch(setAuthentication(true));
                    dispatch(setUserName(username));
                } else {
                    dispatch(authenticationFalse(true))
                }
            }
        )
        .catch((response) => {
            if (response.result !== 0) {
                dispatch(authenticationFalse(true))
            }
        });
};

export const logout = () => (dispatch) => {
    return apiAuthentication.logout().then(() => {
        dispatch(setAuthentication(false));
        dispatch(setUserName(''));
    })
};

