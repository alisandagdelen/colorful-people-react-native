const functions = require('firebase-functions');
const admin = require('firebase-admin');
const randomstring = require('randomstring');
admin.initializeApp(functions.config().firebase);

const generateColorId = (colorCount) => {
  let string = '';

  for (let i = 0; i < colorCount; i++) {
    const color = randomstring.generate({ length: 1, charset: '0123456' });
    const character = randomstring.generate({
      length: 1,
      charset: 'alphanumeric',
      capitalization: 'lowercase'
    });
    string += `${color}${character}`
  }

  return string;
};

exports.afterUserCreate = functions.auth.user().onCreate(event => {
  const data = {
    email: event.data.email,
    colorId: generateColorId(4)
  };
  admin.database().ref(`/users/${event.data.uid}`).set(data)
});
