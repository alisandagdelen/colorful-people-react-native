import firebase from '../firebase/index';
import { Permissions, Notifications } from 'expo';

export const createPushToken = async (userUid) => {
  const pushTokensRef = firebase.database().ref(`users/${userUid}/push_tokens`);

  const { existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  let finalStatus = existingStatus;

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== 'granted') {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== 'granted') {
    return;
  }

  // Get the token that uniquely identifies this device
  let token = await Notifications.getExpoPushTokenAsync();
  const existingPushTokens = await pushTokensRef.once('value');

  if (existingPushTokens.exists() && Object.values(existingPushTokens.val()).includes(token)) {
    return;
  }

  await pushTokensRef.push(token);
};


export default {
  createPushToken
};
