// @flow

import firebase from '../firebase/index';

type createMessageReturn = Promise<{ key: string, sender: string, to: string, chatUid: string }>;

export const createMessage = async (
  chatUid: string,
  sender: string,
  to: string,
  content: string
): createMessageReturn => {

  const messagesRef = firebase.database().ref(`messages`);
  const newMessageRef = messagesRef.push();
  const key = newMessageRef.key;
  const message = { key, sender, to, content, chatUid };

  await newMessageRef.set(message);
  return message
};


export default {
  createMessage
};
