import * as chatLogics from '~/src/logics/chat-logic';
import * as messageLogics from '~/src/logics/message-logic';
import * as loginLogics from '~/src/logics/login-logic';

export default [
  ...Object.values(chatLogics),
  ...Object.values(messageLogics),
  ...Object.values(loginLogics),
];