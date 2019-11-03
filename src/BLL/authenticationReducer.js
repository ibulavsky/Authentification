export const SET_AUTHENTICATION = 'TEST-APP/SET_AUTHENTICATION';
export const AUTHENTICATION_RESULT = 'TEST-APP/AUTHENTICATION_RESULT';

const initialState = {
    isAuthentication: false,
    authenticationError: false,
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
        default:
            return state
    }
};

export default authenticationReducer;

// ACTION CREATORS:
export const setAuthentication = (isAuthentication) => (
    {type: SET_AUTHENTICATION, isAuthentication}
);

export const tryAuthentication = (authenticationError) => (
    {type: AUTHENTICATION_RESULT, authenticationError}
);
