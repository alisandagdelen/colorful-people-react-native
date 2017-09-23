import firebase from '../firebase/index'


export const observeChatMessages = (chatUid, handler) => {
  return firebase.database().ref(`messages/${chatUid}`).on('child_added', handler)
};


export const observeChats = (userId, handler) => {
  return firebase.database().ref(`users/${userId}/chats`).on('child_added', handler)
};