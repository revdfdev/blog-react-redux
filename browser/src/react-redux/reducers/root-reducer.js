import { combineReducers } from 'redux';
import post from './post';
import subscribe from './subscribe';
import user from './user';
import dropdown from './dropdown';
import comment from './comment';

export default combineReducers({
  posts: post,
  subscribe,
  user,
  dropdown,
  comment
});
