import {apiPosts} from "../DAL/api_posts-request";

export const MOUNT_POSTS = 'TEST-APP/MOUNT-POSTS';
export const NEXT_PAGE = 'TEST-APP/NEXT_PAGE';


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
                postPage: state.posts + 1,
            };
        default:
            return state
    }
};

export default postsReducer;

const mountPosts = (posts) => (
    {type: MOUNT_POSTS, posts}
);

export const nextPage = (dispatch, state) => (
    {type: NEXT_PAGE}
);

export const getPosts = (page) => (dispatch) => {
    return apiPosts.getPosts(page)
        .then((posts) => {
                dispatch(mountPosts(posts))
            }
        )
};


