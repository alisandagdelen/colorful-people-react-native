import firebase from '../firebase/index';
import { Permissions, Notifications } from 'expo';

export const createPushToken = async (userUid) => {
  console.log('za1')
  console.log(userUid)
  const pushTokensRef = firebase.database().ref(`users/${userUid}/push_tokens`);
  const newPushTokenRef = pushTokensRef.push();

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
  console.log('za2')

  // Stop here if the user did not grant permissions
  if (finalStatus !== 'granted') {
    return;
  }

  console.log('za3')
  // Get the token that uniquely identifies this device
  let token = await Notifications.getExpoPushTokenAsync();
  await newPushTokenRef.set(token);

  console.log('za4')

};


export default {
  createPushToken
};
