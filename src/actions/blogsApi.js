import axios from 'axios';
const baseUrl = "https://my-json-server.typicode.com/abdulmoiz31/crypto-exchange";

export const ADD_BLOG_REQUEST = 'ADD_BLOG_REQUEST';
export const ADD_BLOG_SUCCESS = 'ADD_BLOG_SUCCESS';
export const ADD_BLOG_FAILURE = 'ADD_BLOG_FAILURE';

export const UPDATE_BLOG_REQUEST = 'UPDATE_BLOG_REQUEST';
export const UPDATE_BLOG_SUCCESS = 'UPDATE_BLOG_SUCCESS';
export const UPDATE_BLOG_FAILURE = 'UPDATE_BLOG_FAILURE';

export const DELETE_BLOG_REQUEST = 'DELETE_BLOG_REQUEST';
export const DELETE_BLOG_SUCCESS = 'DELETE_BLOG_SUCCESS';
export const DELETE_BLOG_FAILURE = 'DELETE_BLOG_FAILURE';

export const FETCH_BLOGS_REQUEST = 'FETCH_BLOGS_REQUEST';
export const FETCH_BLOGS_SUCCESS = 'FETCH_BLOGS_SUCCESS';
export const FETCH_BLOGS_FAILURE = 'FETCH_BLOGS_FAILURE';

const fetchBlogsRequest = () => ({
  type: FETCH_BLOGS_REQUEST,
});

const fetchBlogsSuccess = (data) => ({
  type: FETCH_BLOGS_SUCCESS,
  payload: data,
});

const fetchBlogsFailure = (error) => ({
  type: FETCH_BLOGS_FAILURE,
  payload: error,
});

const addBlogRequest = () => ({
    type: ADD_BLOG_REQUEST,
  });
  
  const addBlogSuccess = (data) => ({
    type: ADD_BLOG_SUCCESS,
    payload: data,
  });
  
  const addBlogFailure = (error) => ({
    type: ADD_BLOG_FAILURE,
    payload: error,
  });

  const updateBlogRequest = () => ({
    type: UPDATE_BLOG_REQUEST,
  });
  
  const updateBlogSuccess = (data) => ({
    type: UPDATE_BLOG_SUCCESS,
    payload: data,
  });
  
  const updateBlogFailure = (error) => ({
    type: UPDATE_BLOG_FAILURE,
    payload: error,
  });

  const deleteBlogRequest = () => ({
    type: DELETE_BLOG_REQUEST,
  });
  
  const deleteBlogSuccess = (data) => ({
    type: DELETE_BLOG_SUCCESS,
    payload: data,
  });
  
  const deleteBlogFailure = (error) => ({
    type: DELETE_BLOG_FAILURE,
    payload: error,
  });

export const fetchBlogsFromServer = () => {
  return (dispatch) => {
    debugger;
    dispatch(fetchBlogsRequest());

    axios
      .get(`${baseUrl}/blogs`)
      .then((response) => {
        debugger;
        const data = response.data;
        dispatch(fetchBlogsSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchBlogsFailure(error.message));
      });
  };
};

export const addBlogToServer = (blog) => {
    return (dispatch) => {
      dispatch(addBlogRequest());
  
      axios
        .put(`${baseUrl}/blogs/${blog.id}`, blog)
        .then((response) => {
          const data = response.data;
          dispatch(addBlogSuccess(data));
        })
        .catch((error) => {
          dispatch(addBlogFailure(error.message));
        });
    };
  };

  export const updateBlogToServer = (id, blog) => {
    return (dispatch) => {
      dispatch(updateBlogRequest());
  
      axios
        .patch(`${baseUrl}/blogs/${id}`, blog)
        .then((response) => {
          const data = response.data;
          dispatch(updateBlogSuccess(data));
        })
        .catch((error) => {
          dispatch(updateBlogFailure(error.message));
        });
    };
  };

  export const deleteBlogFromServer = (id) => {
    return (dispatch) => {
      dispatch(deleteBlogRequest());
  
      axios
        .delete(`${baseUrl}/blogs/${id}`)
        .then((response) => {
          const data = response.data;
          dispatch(deleteBlogSuccess(data));
        })
        .catch((error) => {
          dispatch(deleteBlogFailure(error.message));
        });
    };
  };