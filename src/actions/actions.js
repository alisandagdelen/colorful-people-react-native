export default {

  chat: {
    fetchMessageSuccess: { payload: ['name', 'message'] },
    fetchMessagesSuccess: { payload: ['name', 'messages'] },
    fetchMessagesFailure: { payload: ['err'] },

    _selectChat: {
      payload: ['uid', 'otherUserEmail'],
      dispatch: {
        selected      : { argumentIndices: [0, 1] },
        fetchMessages : { argumentIndices: [0] },
      }
    },

    listenForMessage: { payload: ['chatUid'] },
  },


  message: {
    setTyping         : { payload: ['text'] },
    addMessage        : { payload: ['chatUid', 'content', 'sender', 'to'] },
    addMessageSuccess : { payload: ['chatUid', 'message'] },
    startListening    : { },
  },


  user: {
    signInSuccess     : { payload: ['data'] },
    signUpSuccess     : { payload: ['data'] },
    fetchChats        : { },
    fetchChatSuccess  : { payload: ['data'] },
    fetchChatsSuccess : { payload: ['data'] },
  },


  signUp: {
    apply           : { payload: ['username', 'password'] },
    changeUsername  : { payload: ['username'] },
    changePassword  : { payload: ['password'] },
  },


  login: {
    apply                 : { payload: ['username', 'password'] },
    changeSignInButtonText: { payload: ['text'] },
    changeUsername        : { payload: ['username'] },
    changePassword        : { payload: ['password'] },
  },


  search: {
    selectColor:      { payload: ['color'] },
    changeColorId:    { payload: ['text'] },
    foundByColorId:   { payload: ['data'] },
    startChat:        { payload: ['userUid', 'otherUserEmail'] },
    startChatSuccess: { payload: ['chatData'] },
  },

  profile: {
    select:           {},
    beginEditing:     {},
    endEditing:       {},
    changeNickname:   { payload: ['nickname'] },
  },

  nav: {
    resetToHome: {},
    navigateToChat: {},
  },
};

