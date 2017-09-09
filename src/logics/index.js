import * as chatLogics from '~/src/logics/chat';
import * as messageLogics from '~/src/logics/messages';

export default [
  ...Object.values(chatLogics),
  ...Object.values(messageLogics)
];