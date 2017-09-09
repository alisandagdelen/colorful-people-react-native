import { createSelector } from 'reselect'

const getMessages = (state) => state.messages.data;

const getCurrentChat = (state) => state.chats.currentChat;

const _currentChatMessagesSelector = createSelector(
  getCurrentChat, getMessages,
  (currentChat, messages) => messages[currentChat]
);

export const currentChatMessagesSelector = createSelector(
  _currentChatMessagesSelector,
  messages => messages
);
