import { combineReducers } from 'redux';
import messages from './message-reducer';
import chats from './chat-reducer';
import users from './user-reducer';
import login from './login-reducer';
import signUp from './signup-reducer';
import nav from './nav-reducer';
import search from './search-reducer';
import profile from './profile-reducer';

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
};

const rootReducer = combineReducers({
  messages,
  users,
  chats,
  login,
  signUp,
  nav,
  search,
  colors,
  profile
});

export default rootReducer