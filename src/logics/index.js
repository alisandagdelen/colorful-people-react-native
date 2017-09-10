import * as chatLogics from '~/src/logics/chats-logic';
import * as messageLogics from '~/src/logics/messages-logic';

export default [
  ...Object.values(chatLogics),
  ...Object.values(messageLogics)
];