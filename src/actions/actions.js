export default {

  chat: {
    fetchMessageSuccess: { arguments: ['name', 'message'] },
    fetchMessagesSuccess: { arguments: ['name', 'messages'] },
    fetchMessagesFailure: { arguments: ['err'] },

    _selectChat: {
      arguments: ['uid'],
      dispatch: {
        selected      : { argumentIndices: [0] },
        fetchMessages : { argumentIndices: [0] },
      }
    },

    listenForMessage: { arguments: ['chatUid'] },
  },


  message: {
    setTyping         : { arguments: ['text'] },
    addMessage        : { arguments: ['chatUid', 'content', 'sender'] },
    addMessageSuccess : { arguments: ['chatUid', 'message'] },
    startListening    : { },
  },


  user: {
    signInSuccess     : { arguments: ['data'] },
    signUpSuccess     : { arguments: ['data'] },
    fetchChats        : { },
    fetchChatSuccess  : { arguments: ['data'] },
    fetchChatsSuccess : { arguments: ['data'] },
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


  search: {
    selectColor:      { arguments: ['color'] },
    changeColorId:    { arguments: ['text'] },
    foundByColorId:   { arguments: ['data'] },
    startChat:        { arguments: ['userUid', 'userEmail'] },
    startChatSuccess: { arguments: ['chatData'] },
  },


  nav: {
    resetToHome: {},
    navigateToChat: {},
  },
};

