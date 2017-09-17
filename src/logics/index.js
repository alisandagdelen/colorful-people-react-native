import * as chatLogics from '~/src/logics/chat-logic';
import * as messageLogics from '~/src/logics/message-logic';
import * as loginLogics from '~/src/logics/login-logic';
import * as signupLogics from '~/src/logics/signup-logic';
import * as searchLogics from '~/src/logics/search-logic';

export default [
  ...Object.values(chatLogics),
  ...Object.values(messageLogics),
  ...Object.values(loginLogics),
  ...Object.values(signupLogics),
  ...Object.values(searchLogics),
];