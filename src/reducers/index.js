import { combineReducers } from 'redux';
import user from '~/src/reducers/user-reducer';
import messages from '~/src/reducers/message-reducer';
import channels from '~/src/reducers/channel-reducer';

const rootReducer = combineReducers({
  messages,
  channels,
  user
});

export default rootReducer