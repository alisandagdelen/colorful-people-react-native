import { combineReducers } from 'redux';
import messages from '~/src/reducers/message-reducer';
import chats from '~/src/reducers/chat-reducer';
import users from '~/src/reducers/user-reducer';
import login from '~/src/reducers/login-reducer';
import signUp from '~/src/reducers/signup-reducer';
import nav from '~/src/reducers/nav-reducer';
import search from '~/src/reducers/search-reducer';

const colors = () => {
 return {
    0: 'black',
    1: 'green',
    2: 'yellow',
    3: 'orange',
    4: 'red',
    5: 'blue',
    6: 'purple',
    'black': 0,
    'green': 1,
    'yellow': 2,
    'orange': 3,
    'red': 4,
    'blue': 5,
    'purple': 6,
  };
}

const rootReducer = combineReducers({
  messages,
  users,
  chats,
  login,
  signUp,
  nav,
  search,
  colors
});

export default rootReducer