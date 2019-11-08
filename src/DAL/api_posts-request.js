import axios from "axios";
import {storage} from "./storage";

const axiosInstance = axios.create(
    {
        baseURL: 'https://jsonplaceholder.typicode.com/'
    }
);

axiosInstance.interceptors.request.use(request => {
    request.headers.token = storage.loadToken();
    // всё ли здесь верно, ведь LoadToken возвращает нам
    return request;
});

export const apiPosts = {
    getPosts(currentPage = null) {
        return axiosInstance.get(`posts?_page=${currentPage}`,)
            .then(response => response.data)
    }
};
