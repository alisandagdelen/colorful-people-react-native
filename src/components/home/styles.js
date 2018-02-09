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
  rightSection: {
    flex: 1,
    maxWidth: 50,
    justifyContent: 'space-between'
  },
  nickname: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'AvenirNext',
    color: 'black'
  },
  messageSection: {
    height: 40,
    justifyContent: 'space-between',
  },
  lastMessageTime: {
    fontSize: 10,
    marginTop: 5,
  },
  message: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'AvenirNext',
    color: '#8E8E92'
  },
  badge: {
    height: 23,
    paddingBottom: 2,
    paddingTop: 2,
    paddingLeft: 5,
    paddingRight: 5,
  }
});
