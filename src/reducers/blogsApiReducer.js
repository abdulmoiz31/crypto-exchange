import { ADD_BLOG_REQUEST, ADD_BLOG_SUCCESS, ADD_BLOG_FAILURE, UPDATE_BLOG_REQUEST, UPDATE_BLOG_SUCCESS, UPDATE_BLOG_FAILURE, DELETE_BLOG_REQUEST, DELETE_BLOG_SUCCESS, DELETE_BLOG_FAILURE, FETCH_BLOGS_REQUEST, FETCH_BLOGS_SUCCESS, FETCH_BLOGS_FAILURE } from '../actions/blogsApi';

const initialState = {
  Blogs: [],
  loadingBlogs: false,
  errorBlogs: null,
};

const blogsApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BLOGS_REQUEST:
      debugger;
      return {
        ...state,
        loadingBlogs: true,
        errorBlogs: null
      };
    case FETCH_BLOGS_SUCCESS:
      return {
        ...state,
        loadingBlogs: false,
        Blogs: action.payload,
      };
    case FETCH_BLOGS_FAILURE:
      return {
        ...state,
        loadingBlogs: false,
        errorBlogs: action.payload,
      };
    case ADD_BLOG_REQUEST:
      return {
        ...state,
        loadingBlogs: true,
        errorBlogs: null
      };
    case ADD_BLOG_SUCCESS:
      return {
        ...state,
        loadingBlogs: false,
        Blogs: action.payload,
      };
    case ADD_BLOG_FAILURE:
      return {
        ...state,
        loadingBlogs: false,
        errorBlogs: action.payload,
      };
    case UPDATE_BLOG_REQUEST:
        return {
          ...state,
          loadingBlogs: true,
          errorBlogs: null
        };
      case UPDATE_BLOG_SUCCESS:
        return {
          ...state,
          loadingBlogs: false,
        };
      case UPDATE_BLOG_FAILURE:
        return {
          ...state,
          loadingBlogs: false,
          errorBlogs: action.payload,
        };
      case DELETE_BLOG_REQUEST:
          return {
            ...state,
            loadingBlogs: true,
            errorBlogs: null
          };
        case DELETE_BLOG_SUCCESS:
          return {
            ...state,
            loadingBlogs: false,
            Blogs: action.payload,
          };
        case DELETE_BLOG_FAILURE:
          return {
            ...state,
            loadingBlogs: false,
            errorBlogs: action.payload,
          };
    default:
      return state;
  }
};

export default blogsApiReducer;