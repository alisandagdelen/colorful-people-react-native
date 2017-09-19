import { types } from '~/src/actions/index'

const initialState = {
  currentUser: '',
  email: '',
  authorized: false,
  uid: '',
  colorId: '',
};

export default function(state = initialState, action) {

  switch (action.type) {

    case types.USER_FETCH_CHATS_SUCCESS:
      return state;

    case types.USER_SIGN_UP_SUCCESS:
    case types.USER_SIGN_IN_SUCCESS:
      return {
        ...state,
        authorized:true,
        email: action.payload.data.email,
        currentUser: action.payload.data.email,
        uid: action.payload.data.uid,
        colorId: action.payload.data.colorId
      };

    default:
      return state
  }
}