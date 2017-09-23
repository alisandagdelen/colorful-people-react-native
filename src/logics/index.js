import * as chatLogics from './chat-logic';
import * as messageLogics from './message-logic';
import * as loginLogics from './login-logic';
import * as signupLogics from './signup-logic';
import * as searchLogics from './search-logic';
import * as userLogics from './user-logic';

export default [
  ...Object.values(chatLogics),
  ...Object.values(messageLogics),
  ...Object.values(loginLogics),
  ...Object.values(signupLogics),
  ...Object.values(searchLogics),
  ...Object.values(userLogics),
];