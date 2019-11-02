export const AUTH_SUCCESS = 'TEST-APP/AUTH-SUCCESS';

const initialState = {
    isAuthentication: false,

};

const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                isAuthentication: action.isAuthentication,
            };
        default:
            return state
    }
};

export default authenticationReducer;

export const setAuthentication = (isAuthentication) => (
    {type: AUTH_SUCCESS, isAuthentication}
);
