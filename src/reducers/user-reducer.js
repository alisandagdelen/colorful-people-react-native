import { types } from '~/src/actions/index'

const initialState = {
  currentUser: '',
  email: '',
  authorized: false,
};

export default function(state = initialState, action) {

  switch (action.type) {

    case types.USER_SIGN_IN_SUCCESS:
      return { ...state,authorized:true, email: action.payload.email, currentUser: action.payload.email };

    default:
      return state
  }
}