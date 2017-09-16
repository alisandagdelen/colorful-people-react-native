import firebase from '~/firebase/index';

export const fetchMessages = async (chatId) => {
  const messagesRef = firebase.database().ref(`messages/${chatId}`);
  return await messagesRef.orderByKey().once('value');
};


export default {
  fetchMessages
};
