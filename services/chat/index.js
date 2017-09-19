import firebase from '~/firebase/index';

export const fetchMessages = async (chatId) => {
  const messagesRef = firebase.database().ref(`messages/${chatId}`);
  return await messagesRef.orderByKey().once('value');
};

export const startChat = async (currentUserUid, currentUserEmail, otherUserUid, otherUserEmail) => {
  const newChatRef = firebase.database().ref('chats').push();
  const data = {
    uid: newChatRef.key,
    members: {
      [currentUserUid]: currentUserEmail,
      [otherUserUid]: otherUserEmail,
    }
  };
  await newChatRef.set(data);
  data.name = otherUserEmail;
  return data;
};

export default {
  startChat,
  fetchMessages,
};
