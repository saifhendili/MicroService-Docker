import {
    GET_POSTS,
    POST_ERROR,
    UPDATE_LIKES,
    DELETE_POST,
    ADD_POST,
    GET_POST,
    ADD_COMMENT,
    REMOVE_COMMENT,
  } from '../Constants/Blogconst';
  
  const initialState = {
    blogs: [],
    blog: null,
    loading: true,
    error: {},
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_POSTS:
        return {
          ...state,
          blogs: payload,
          loading: false,
        };
      case GET_POST:
        return {
          ...state,
          blog: payload,
          loading: false,
        };
      case ADD_POST:
        return {
          ...state,
          blogs: [payload, ...state.blogs],
          loading: false,
        };
      case DELETE_POST:
        return {
          ...state,
          blogs: state.blogs.filter((post) => post._id !== payload),
          loading: false,
        };
      case POST_ERROR:
        return {
          ...state,
          error: payload,
          loading: false,
        };
      case UPDATE_LIKES:
        return {
          ...state,
          blogs: state.blogs.map((post) =>
            post._id === payload.id ? { ...post, likes: payload.likes } : post
          ),
          loading: false,
        };
      case ADD_COMMENT:
        return {
          ...state,
          blog: { ...state.blog, comments: payload },
          loading: false,
        };
      case REMOVE_COMMENT:
        return {
          ...state,
          blog: {
            ...state.blog,
            comments: state.blog.comments.filter(
              (comment) => comment._id !== payload
            ),
          },
          loading: false,
        };
      default:
        return state;
    }
  }