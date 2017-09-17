import { types } from '~/src/actions/index'

const initialState = {
  username: '',
  password: ''
};

export default function(state = initialState, action) {

  switch (action.type) {

    case types.SIGN_UP_CHANGE_USERNAME:
      return { ...state, username: action.payload.username };

    case types.SIGN_UP_CHANGE_PASSWORD:
      return { ...state, password: action.payload.password };

    default:
      return state
  }
}