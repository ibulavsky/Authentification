export const storage = {
    saveToken(data) {
        localStorage.setItem('token', data)
        // нужно ли здесь сохранять токен ассинхронно? ведь он у нас уже сформирован на сервере
        // в момент когда login()
    },
    loadToken() {
        return Promise.resolve(localStorage.getItem('token'))
    }
};
