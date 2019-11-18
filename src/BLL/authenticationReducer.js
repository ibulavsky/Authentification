import {apiAuthentication} from "../DAL/api_auth-request";
import {storage} from "../DAL/storage";

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
    // const loginResponse =
    apiAuthentication.login(username, password)
        .then((response) => {
                if (response.result === 0) {
                    storage.saveToken(response.token);
                    dispatch(setAuthentication(true));
                    dispatch(setUserName(response.username));
                    return response;
                } else {
                    dispatch(authenticationFalse(true));
                    return response
                }
            }
        )
};

export const logout = () => (dispatch) => {
    apiAuthentication.logout()
        .then(response => {
                if (response.result === 0) {
                    storage.saveToken(response.token)
                        .then(() => {
                                dispatch(setAuthentication(false));
                                dispatch(setUserName(''));
                                return response
                            }
                        )
                } else {
                    console.log('Logout Error')
                }
            }
        );
};

export const checkAuthorization = () => (dispatch) => {
    storage.loadToken()
        .then((token) => {
            if (token !== 'null') {
                // js преобразует null в строку 'null' , как этого избежать?
                dispatch(setAuthentication(true));
                // как определить имя пользователя по токену?
                dispatch(setUserName('Admin'));
            } else {
                dispatch(setAuthentication(false));
                dispatch(setUserName(''));
            }
        })
};

