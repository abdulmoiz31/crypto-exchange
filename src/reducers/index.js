import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import blogsReducer from './blogsReducer';
import signupReducer from './signupReducer'
import loginReducer from './loginReducer'
import tokenReducer from './tokenReducer'
import dataReducer from './blogsApiReducer'
import ratesReducer from './ratesReducer'
import transferCoinReducer from './coinTransferReducer'


const rootReducer = combineReducers({
  blogs: blogsReducer,
  users: usersReducer,
  signup: signupReducer,
  login: loginReducer,
  token: tokenReducer,
  data: dataReducer,
  rates: ratesReducer,
  transferCoin: transferCoinReducer,
});

export default rootReducer;