export const apiAuthentication = {
    login(login, password) {
        if (login === 'Admin' && password === '111111') {
            return Promise.resolve(
                {token: 'valid_token', result: 0}
            )
        } else {
            return Promise.resolve(
                {result: 401, token: null}
            )
        }
    },
    logout() {
        return Promise.resolve(
            {result: 0, token: null}
        )
    }
};
