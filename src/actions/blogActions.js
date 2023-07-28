

export const ADD_BLOG = 'ADD_BLOG';
export const UPDATE_BLOG = 'UPDATE_BLOG';
export const DELETE_BLOG = 'DELETE_BLOG';

export const addBlog = (blog) => ({
    type: ADD_BLOG,
    payload: blog,
  });
  
  export const updateBlog = (id, updatedBlog) => ({
    type: UPDATE_BLOG,
    payload: { id, updatedBlog },
  });
  
  export const deleteBlog = (id) => ({
    type: DELETE_BLOG,
    payload: id,
  });