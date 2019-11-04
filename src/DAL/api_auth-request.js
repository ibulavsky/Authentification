export const apiAuthentication = {
    login(login, password) {
        if (login === 'Admin' && password === '111111') {
            return Promise.resolve(
                {authenticationError: false, token: 'some_token_', result: 0}
            )
        } else {
            return Promise.reject(
                {authenticationError: true, result: 401}
            )
        }
    },
    logout() {
        return Promise.resolve(
            {isAuthentication: false}
        )
    }
};
