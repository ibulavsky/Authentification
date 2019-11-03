export const apiAuthentication = {
    login(login, password) {
        if (login === 'Admin' && password === '111111') {
            return Promise.resolve(
                {authenticationError: false, token: 'some_token_'}
            )
        } else {
            return Promise.reject(
                {authenticationError: true}
            )
        }
    },
    logout() {
        return Promise.resolve(
            {isAuthentication: false}
        )
    }
};
