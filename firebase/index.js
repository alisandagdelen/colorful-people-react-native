import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD8zx4E-JOcaz4buh4MJAjikHbuTUlCTK8",
  authDomain: "colorful-people.firebaseapp.com",
  databaseURL: "https://colorful-people.firebaseio.com",
  projectId: "colorful-people",
  storageBucket: "colorful-people.appspot.com",
  messagingSenderId: "889576820080"
};


firebase.initializeApp(config);

export default firebase;