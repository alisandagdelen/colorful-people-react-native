import { combineReducers } from 'redux';
import messages from '~/src/reducers/message-reducer';
import chats from '~/src/reducers/chat-reducer';
import users from '~/src/reducers/user-reducer';
import login from '~/src/reducers/login-reducer';
import nav from '~/src/reducers/nav-reducer';

const rootReducer = combineReducers({
  messages,
  users,
  chats,
  login,
  nav,
});

export default rootReducer