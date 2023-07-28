import { ADD_BLOG, UPDATE_BLOG, DELETE_BLOG } from '../actions/blogActions';


function createData(id, title, subtitle, author) {
  
    return { id, title, subtitle, author };
  }


const initialState = {
    blogs: [
        createData('1', 'Blog 1', 'example', 'tada'),
        createData('2', 'Blog 1', 'example', 'tada'),
        createData('3', 'Blog 1', 'example', 'tada'),
        createData('4', 'Blog 1', 'example', 'tada'),
        createData('5', 'Blog 1', 'example', 'tada'),
        createData('6', 'Blog 1', 'example', 'tada'),
        createData('7', 'Blog 1', 'example', 'tada'),
        createData('8', 'Blog 1', 'example', 'tada'),
        createData('9', 'Blog 1', 'example', 'tada'),
        createData('10', 'Blog 1', 'example', 'tada'),
        createData('11', 'Blog 1', 'example', 'tada'),
        createData('12', 'Blog 1', 'example', 'tada'),
        createData('13', 'Blog 1', 'example', 'tada'),
        createData('14', 'Blog 1', 'example', 'tada'),
        createData('15', 'Blog 1', 'example', 'tada'),
        createData('16', 'Blog 1', 'example', 'tada'),
        createData('17', 'Blog 1', 'example', 'tada'),
    ],
  };
  

  const blogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BLOG:
            return {
                ...state,
                blogs: [...state.blogs, action.payload], // Create a new array with the updated user
            };
        case UPDATE_BLOG:
            const updatedBlog = action.payload.updatedBlog;
            const updatedBlogs = state.blogs.map((blog) =>
                blog.id === updatedBlog.id ? updatedBlog : blog
            );
            return {
                ...state,
                blogs: updatedBlogs,
            };
        case DELETE_BLOG:
            return {...state, blogs: state.blogs.filter((blog) => blog.id !== action.payload)};
        default:
            return state;
    }
  };
  
  export default blogsReducer;