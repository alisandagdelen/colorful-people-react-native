import { StyleSheet } from 'react-native'
import { primaryColor } from '../globals/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  logo: {
    alignSelf: 'center',
    margin: 20,
  },
  primaryButton: {
    margin: 13,
    backgroundColor: primaryColor,
  },
  loginForm: {
    flex: 1,
    marginTop: 20
  }
});
