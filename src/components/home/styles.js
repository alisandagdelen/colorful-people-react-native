import { StyleSheet } from 'react-native';

export default  StyleSheet.create({
  listItem: {
    marginLeft: 0,
    paddingLeft: 5,
    paddingBottom: 7,
    paddingTop: 7,
  },
  avatar: {
    borderRadius: 15,
    width: 40,
    height: 40,
    marginRight: 5,
    marginLeft: 0,
  },
  nickname: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'AvenirNext',
    color: 'black'
  },
  messageSection: {
    height: 40,
    justifyContent: 'spaceBetween',
  },
  message: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'AvenirNext',
    color: '#8E8E92'
  }
});
