import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import blogsReducer from './blogsReducer';
import signupReducer from './signupReducer'
import loginReducer from './loginReducer'
import tokenReducer from './tokenReducer'


const rootReducer = combineReducers({
  blogs: blogsReducer,
  users: usersReducer,
  signup: signupReducer,
  login: loginReducer,
  token: tokenReducer
});

export default rootReducer;