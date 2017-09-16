import { types } from '~/src/actions/index'

const initialState = {
  username: 'ozan@gmail.com',
  password: '123456',
};

export default function(state = initialState, action) {

  switch (action.type) {

    case types.CHANGE_USERNAME:
      return { ...state, username: action.payload.username };

    case types.CHANGE_PASSWORD:
      return { ...state, password: action.payload.password };

    default:
      return state
  }
}