import { Toast } from 'native-base';

export const showToast = (err) => {
  let message = '';

  if (!err) {
    message = 'Undefined err parameter';
  }

  else if (err.message) {
    message = err.message;
  }

  else if (typeof err === 'string') {
    message = err;
  }


  Toast.show({
    text: message,
    position: 'bottom',
    buttonText: 'Okay',
    duration: 3000,
  });
};
