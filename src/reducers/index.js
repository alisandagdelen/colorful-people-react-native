import { combineReducers } from 'redux';
import messages from '~/src/reducers/message-reducer';
import chats from '~/src/reducers/chat-reducer';
import users from '~/src/reducers/user-reducer';

const rootReducer = combineReducers({
  messages,
  users,
  chats,
});

export default rootReducer