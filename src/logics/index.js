import * as chatLogics from '~/src/logics/chat-logic';
import * as messageLogics from '~/src/logics/message-logic';

export default [
  ...Object.values(chatLogics),
  ...Object.values(messageLogics)
];