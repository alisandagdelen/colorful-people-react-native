import { types } from '../actions/index'

const initialState = {
  username: '@gmail.com',
  password: '123456',
};

export default function(state = initialState, action) {

  switch (action.type) {

    case types.LOGIN_CHANGE_USERNAME:
      return { ...state, username: action.payload.username };

    case types.LOGIN_CHANGE_PASSWORD:
      return { ...state, password: action.payload.password };

    default:
      return state
  }
}