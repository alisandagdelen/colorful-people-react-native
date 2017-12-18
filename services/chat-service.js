import firebase from '../firebase/index';

export const fetchMessages = async (chatUid) => {
  const messagesRef = firebase.database().ref(`messages/${chatUid}`);
  return await messagesRef.orderByKey().once('value');
};


export const chatExists = async (currentUserUid, currentUserEmail, otherUserEmail) => {
  const chatsRef = await firebase.database().ref(`/users/${currentUserUid}/chats`).once('value');

  if (!chatsRef || !chatsRef.exists()) {
    return false;
  }

  const chatIds = Object.keys(chatsRef.val());
  const chats = await fetchChatsById(chatIds, { currentUserEmail });
  const chatValues = Object.values(chats);

  if (chatValues.find(c => c.otherUserEmail === otherUserEmail)) {
    return true;
  }

  return false;
};


export const startChat = async (currentUserUid, currentUserEmail, otherUserUid, otherUserEmail) => {
  const newChatRef = firebase.database().ref('chats').push();
  const chatData = {
    uid: newChatRef.key,
    members: {
      [currentUserUid]: currentUserEmail,
      [otherUserUid]: otherUserEmail,
    }
  };

  const updates = {};
  updates[`/chats/${newChatRef.key}`] = chatData;
  updates[`/users/${currentUserUid}/chats/${newChatRef.key}`] = true;
  updates[`/users/${otherUserUid}/chats/${newChatRef.key}`] = true;

  await firebase.database().ref().update(updates);

  chatData.otherUserEmail = otherUserEmail;
  return chatData;
};


export const fetchChatById = async (chatUid, { currentUserEmail }) => {
  if (!chatUid) {
    return {};
  }

  const chatSnapshot = await firebase.database().ref(`chats/${chatUid}`).once('value');
  const chat = chatSnapshot.val();
  const emails = Object.values(chat.members);
  const otherUserEmail = emails.find(email => email !== currentUserEmail);
  return { name: otherUserEmail, otherUserEmail, uid: chat.uid };
};


export const fetchChatsById = async (chatUids, { currentUserEmail }) => {
  if (!chatUids) {
    return {};
  }

  const queue = chatUids.map(id => {
    return firebase.database().ref(`chats/${id}`).once('value');
  });

  const chatSnapshots = await Promise.all(queue);
  const res = {};

  chatSnapshots.forEach(s => {
    const chat = s.val();
    const emails = Object.values(chat.members);
    const otherUserEmail = emails.find(email => email !== currentUserEmail);
    res[chat.uid] = { name: otherUserEmail, otherUserEmail, uid: chat.uid };
  });

  return res;
};


export default {
  startChat,
  fetchMessages,
  fetchChatsById,
  fetchChatById,
  chatExists,
};
