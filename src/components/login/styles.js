import { StyleSheet } from 'react-native'

export default  StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  logo: {
  	alignSelf: 'center',
  	margin: 20,
  },
  primaryButton: {
    margin: 13,
  },
  buttonsContainer: {
    height: 100
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
  },
  signUp: {
  	alignSelf: 'center',
  }
})
