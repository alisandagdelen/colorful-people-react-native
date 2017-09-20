import { types } from '~/src/actions/index'

const initialState = {
  email: '',
  authorized: false,
  uid: '',
  colorId: '',
  chats: {},
};

export default function(state = initialState, action) {

  switch (action.type) {

    case types.USER_SIGN_UP_SUCCESS:
    case types.USER_SIGN_IN_SUCCESS:
      return {
        ...state,
        authorized:true,
        email: action.payload.data.email,
        chats: action.payload.data.chats,
        uid: action.payload.data.uid,
        colorId: action.payload.data.colorId
      };

    default:
      return state
  }
}