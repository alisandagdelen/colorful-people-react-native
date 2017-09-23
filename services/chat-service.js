import firebase from '../firebase/index';

export const fetchMessages = async (chatUid) => {
  const messagesRef = firebase.database().ref(`messages/${chatUid}`);
  return await messagesRef.orderByKey().once('value');
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

  chatData.name = otherUserEmail;
  return chatData;
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
    const chatName = emails.find(email => email !== currentUserEmail);
    res[chat.uid] = { name: chatName, uid: chat.uid };
  });

  return res;
};


export default {
  startChat,
  fetchMessages,
  fetchChatsById,
};
