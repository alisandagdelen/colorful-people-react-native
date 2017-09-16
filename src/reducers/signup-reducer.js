import { types } from '~/src/actions/index'

const initialState = {
  username: '',
  password: ''
};

export default function(state = initialState, action) {

  switch (action.type) {

    case types.SIGNUP_CHANGE_USERNAME:
      return { ...state, username: action.payload.username };

    case types.SIGNUP_CHANGE_PASSWORD:
      return { ...state, password: action.payload.password };

    default:
      return state
  }
}