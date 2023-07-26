const initialState = {
    blogs: [],
  };
  
  const blogsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'add_blog':
        return [
            ...state, action.payload,
          ];
      default:
        return state;
    }
  };
  
  export default blogsReducer;