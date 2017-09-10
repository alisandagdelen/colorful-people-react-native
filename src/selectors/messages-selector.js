import { createSelector } from 'reselect'

export const messagesSelector = (state) => state.messages.data;

export const currentChatSelector = (state) => state.chats.currentChat;

export const currentChatMessagesSelector = createSelector(
  currentChatSelector, messagesSelector,
  (currentChat, messages) => Object.values(messages[currentChat] || {})
);

