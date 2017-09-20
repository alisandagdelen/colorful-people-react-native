import firebase from '~/firebase/index';

export const createMessage = async (chatUid, sender, content) => {
  const messagesRef = firebase.database().ref(`messages/${chatUid}`);
  const newMessageRef = messagesRef.push();
  const key = newMessageRef.key;
  const message = { key, sender, content, chatUid };

  await newMessageRef.set(message);
  return message
};


export default {
  createMessage
};
