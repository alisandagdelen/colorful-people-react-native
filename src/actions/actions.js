export default {

  chat: {
    fetchMessageSuccess: { arguments: ['name', 'message'] },
    fetchMessagesSuccess: { arguments: ['name', 'messages'] },
    fetchMessagesFailure: { arguments: ['err'] },

    _selectChat: {
      arguments: ['uid', 'otherUserEmail'],
      dispatch: {
        selected      : { argumentIndices: [0, 1] },
        fetchMessages : { argumentIndices: [0] },
      }
    },

    listenForMessage: { arguments: ['chatUid'] },
  },


  message: {
    setTyping         : { arguments: ['text'] },
    addMessage        : { arguments: ['chatUid', 'content', 'sender', 'to'] },
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
    apply                 : { arguments: ['username', 'password'] },
    changeSignInButtonText: { arguments: ['text'] },
    changeUsername        : { arguments: ['username'] },
    changePassword        : { arguments: ['password'] },
  },


  search: {
    selectColor:      { arguments: ['color'] },
    changeColorId:    { arguments: ['text'] },
    foundByColorId:   { arguments: ['data'] },
    startChat:        { arguments: ['userUid', 'otherUserEmail'] },
    startChatSuccess: { arguments: ['chatData'] },
  },

  profile: {
    select:           {},
    beginEditing:     {},
    endEditing:       {},
    changeNickname:   { arguments: ['nickname'] },
    logout:           {},
  },

  nav: {
    resetToHome: {},
    resetToLogin: {},
    navigateToChat: {},
  },
};

