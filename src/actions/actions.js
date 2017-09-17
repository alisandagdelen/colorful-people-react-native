export default {

  chat: {
    fetchMessagesSuccess: { arguments: ['name', 'messages'] },
    fetchMessagesFailure: { arguments: ['err'] },

    _selectChat: {
      arguments: ['name'],
      dispatch: {
        selected      : { argumentIndices: [0] },
        fetchMessages : { argumentIndices: [0] },
      }
    },
  },


  message: {
    setTyping         : { arguments: ['text'] },
    addMessage        : { arguments: ['chat', 'content', 'sender'] },
    addMessageSuccess : { arguments: ['currentChat', 'message'] },
  },


  user: {
    signInSuccess   : { arguments: ['data'] },
    signUpSuccess   : { arguments: ['data'] },
  },


  signUp: {
    apply           : { arguments: ['username', 'password'] },
    changeUsername  : { arguments: ['username'] },
    changePassword  : { arguments: ['password'] },
  },


  login: {
    apply           : { arguments: ['username', 'password'] },
    changeUsername  : { arguments: ['username'] },
    changePassword  : { arguments: ['password'] },
  },


  nav: { navigateToHome: {} }
};

