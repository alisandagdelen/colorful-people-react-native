import { Toast } from 'native-base';

export const showToast = (message) => {
  Toast.show({
    text: message,
    position: 'bottom',
    buttonText: 'Okay'
  });
};
