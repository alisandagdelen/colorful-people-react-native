export default {

  chat: {
    fetchMessagesSuccess: {
      arguments: ['name', 'messages']
    },
    fetchMessagesFailure: {
      arguments: ['err']
    },

    _selectChat: {
      arguments: ['name'],
      dispatch: {
        selected: { argumentIndices: [0] },
        fetchMessages: { argumentIndices: [0] }
      }
    },
  },


  message: {
    addMessage: {
      arguments: ['chat', 'content', 'sender']
    },
    addMessageSuccess: {
      arguments: ['currentChat', 'message']
    },
    setTyping: {
      arguments: ['text']
    }
  },


  user: {
    signIn: {
      arguments: ['username', 'password']
    },
    signInSuccess: {},
    signUp: {
      arguments: ['username', 'password']
    },
    signUpSuccess: {},
  },


  signUp: {
    changeUsername: {
      arguments: ['username']
    },
    changePassword: {
      arguments: ['password']
    }
  },


  login: {
    changeUsername: {
      arguments: ['username']
    },
    changePassword: {
      arguments: ['password']
    }
  },


  nav: {
    navigateToHome: {}
  }
};

