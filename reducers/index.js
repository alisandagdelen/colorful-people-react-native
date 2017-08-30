import { combineReducers } from 'redux';
import user from '~/reducers/user-reducer';
import messages from '~/reducers/message-reducer';
import friends from '~/reducers/friend-reducer';

const rootReducer = combineReducers({
  messages,
  friends,
  user
});

export default rootReducer