import firebase from '~/firebase/index';

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export { googleProvider };