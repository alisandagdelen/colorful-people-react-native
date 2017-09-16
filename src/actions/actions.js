export default {

  chat: {
    fetchChatMessagesSuccess: {
      arguments: ['name', 'messages']
    },
    cancelFetchChatMessagesSuccess: {
      arguments: ['name']
    },
    fetchChatMessagesFailure: {
      arguments: ['err']
    },
    _selectChat: {
      arguments: ['name'],
      dispatch: {
        chatSelected: { argumentIndices: [0] },
        fetchChatMessages: { argumentIndices: [0] }
      }
    },
    cancelChatSelected: {
      arguments: ['name']
    }
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
    signInSuccess: {}
  },

  login: {
    changeUsername: {
      arguments: ['username']
    },
    changePassword: {
      arguments: ['password']
    }
  }
};

