import { StyleSheet } from 'react-native';
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
    backgroundColor: primaryColor,
    margin: 13,
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  facebookButton: {
    padding: 10,
    alignSelf: 'center',
    marginBottom: '5%',
    backgroundColor: '#3B5998',
  },
  footerText: {
    alignSelf: 'center',
    color: '#FF6265',
    marginTop: 40,
  },
  signUp: {
    alignSelf: 'center',
  },
  loginForm: {
    flex: 1,
    marginTop: 20
  }
});
