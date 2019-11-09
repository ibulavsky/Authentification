export const storage = {
    saveToken(data) {
        return Promise.resolve(
            localStorage.setItem('token', data)
        )
    },
    loadToken() {
        return Promise.resolve(
            localStorage.getItem('token')
        )
    }
};
