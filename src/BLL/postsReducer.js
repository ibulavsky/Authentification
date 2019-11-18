import {apiPosts} from "../DAL/api_posts-request";

export const MOUNT_POSTS = 'TEST-APP/MOUNT-POSTS';
export const NEXT_PAGE = 'TEST-APP/NEXT_PAGE';
export const LOADING = 'TEST-APP/LOADING';


const initialState = {
    posts: [
        // {
        //     userId: 1,
        //     id: 1,
        //     title: 'Оу, это первый пост',
        //     body: 'Hey, everyone! Hey, everyone! Hey, everyone! Hey, everyone! Hey, everyone! Hey, everyone! ' +
        //         'Hey, everyone! Hey, everyone! Hey, everyone! Hey, everyone! Hey, everyone! Hey, everyone! ' +
        //         'Hey, everyone!'
        // }, {
        //     userId: 2,
        //     id: 2,
        //     title: 'Second title',
        //     body: 'Hey, everyone! Hey, everyone! Hey, everyone! Hey, everyone!'
        // },
    ],
    postsPage: 1,
    isLoading: false
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOUNT_POSTS:
            return {
                ...state,
                posts: [...state.posts, ...action.posts],
            };
        case NEXT_PAGE:
            return {
                ...state,
                postsPage: (state.postsPage + 1),
            };
        case LOADING:
            return {
                ...state,
                isLoading: action.loading,
            };
        default:
            return state
    }
};

export default postsReducer;

const mountPosts = (posts) => (
    {type: MOUNT_POSTS, posts}
);

export const nextPage = () => {
    return (
        {type: NEXT_PAGE}
    )
};

const loading = (loading) => ({type: LOADING, loading});

export const getPosts = (page) => (dispatch, getState) => {
    if (!getState().posts.isLoading) {
        dispatch(loading(true));
        apiPosts.getPosts(page)
            .then((posts) => {
                    dispatch(mountPosts(posts));
                    dispatch(nextPage());
                    dispatch(loading(false));
                }
            );
    }
};


