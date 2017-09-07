import { combineReducers } from 'redux';
import messages from '~/src/reducers/message-reducer';
import chats from '~/src/reducers/chat-reducer';

const rootReducer = combineReducers({
  messages,
  chats,
});

export default rootReducer