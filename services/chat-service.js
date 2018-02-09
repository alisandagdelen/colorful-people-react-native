import firebase from '../firebase/index';
import { getDateRelativeToServer } from "./helpers";

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

  const createChat = async () => {
    const chatData = {
      uid: newChatRef.key,
      members: {
        [currentUserUid]: currentUserEmail,
        [otherUserUid]: otherUserEmail,
      },
      createdAt: firebase.database.ServerValue.TIMESTAMP
    };

    const updates = {};
    updates[`/chats/${newChatRef.key}`] = chatData;

    updates[`/users/${currentUserUid}/chats/${newChatRef.key}`] = {
      createdAt: firebase.database.ServerValue.TIMESTAMP
    };
    updates[`/users/${otherUserUid}/chats/${newChatRef.key}`] = {
      createdAt: firebase.database.ServerValue.TIMESTAMP
    };

    await firebase.database().ref().update(updates);
    return chatData;
  };

  const createUserChat = async (userId, chatId) => {
    const userChatsRef = firebase.database().ref(`user_chats`);
    const createdAt = await getDateRelativeToServer();
    await userChatsRef.child(userId).set({ [`${chatId}`]: { createdAt } });
  };

  const chatData = await createChat();
  await createUserChat(currentUserUid, newChatRef.key);

  chatData.otherUserEmail = otherUserEmail;
  chatData.name = otherUserEmail;
  return chatData;
};


export const fetchUserChatIds = async (userId) => {
  const chatIds = await firebase.database().ref(`users/${userId}/chats`).once('value');
  return chatIds.val();
};


export const fetchUserChats = async (userId, { currentUserEmail }) => {
  const chatIds = await fetchUserChatIds(userId);
  return await fetchChatsById(chatIds, { currentUserEmail })
};


export const fetchChatLastMessage = async (chatUid) => {
  if (!chatUid) {
    return null;
  }

  const messagesRef = firebase.database().ref(`messages`);
  const s = await messagesRef
    .orderByChild('chatUid')
    .equalTo(chatUid)
    .limitToLast(1)
    .once('child_added');

  return s.val();
};


export const fetchChatById = async (chatUid, { currentUserEmail }) => {
  if (!chatUid) {
    return {};
  }

  const chatSnapshot = await firebase.database().ref(`chats/${chatUid}`).once('value');
  const chat = chatSnapshot.val();
  const emails = Object.values(chat.members);
  const otherUserEmail = emails.find(email => email !== currentUserEmail);
  const lastMessage = await fetchChatLastMessage(chatUid);
  return { name: otherUserEmail, otherUserEmail, uid: chat.uid, lastMessage: lastMessage.content };
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
  fetchUserChats,
  chatExists,
};
