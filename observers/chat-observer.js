import firebase from '~/firebase/index'


export const observeChatMessages = (chatUid, handler) => {
  return firebase.database().ref(`messages/${chatUid}`).on('child_added', handler)
};