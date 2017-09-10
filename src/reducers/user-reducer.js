import * as types from '~/src/actions/types'

const initialState = {
  currentUser: 'ozan',
};

export default function(state = initialState, action) {

  switch (action.type) {
    case 'SET_USER_NAME':
      return Object.assign({}, state, {
        name: action.name
      });

    case 'SET_USER_AVATAR':
      return Object.assign({}, state, {
        avatar: action.avatar
      });

    case 'USER_START_AUTHORIZING':
      return Object.assign({}, state, {
        authorizing: true
      });

    case 'USER_AUTHORIZED':
      return Object.assign({}, state, {
        authorizing: false,
        authorized: true
      });

    default:
      return state
  }
}