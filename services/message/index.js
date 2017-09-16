import firebase from '~/firebase/index';

export const createMessage = async (chatId, sender, content) => {
  const messagesRef = firebase.database().ref(`messages/${chatId}`);
  const newMessageRef = messagesRef.push();
  const key = newMessageRef.key;
  const message = { key, sender, content, chat: chatId };

  await newMessageRef.set(message);
  return message
};


export default {
  createMessage
};
