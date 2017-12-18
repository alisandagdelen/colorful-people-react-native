import { createSelector } from 'reselect'

export const messagesSelector = (state) => state.messages.data;

export const currentChatIdSelector = (state) => state.chats.currentChatId;

export const typingSelector = state => state.messages.typing;

export const currentChatMessagesSelector = createSelector(
  currentChatIdSelector, messagesSelector,
  (currentChatId, messages) => Object.values(messages[currentChatId] || []).reverse()
);

