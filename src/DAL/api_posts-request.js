import * as axios from "axios";

const instance = axios.create(
    {
        baseURL: 'https://jsonplaceholder.typicode.com/'
    }
);

export const apiPosts = {
    getPosts(currentPage = null) {
        return instance.get(`posts?_page=${currentPage}`,)
            .then(response => response.data)
    }
};
