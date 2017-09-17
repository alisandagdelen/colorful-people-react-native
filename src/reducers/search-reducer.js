import { types } from '~/src/actions/index'

const initialState = {
  colorId: '',
  selectedColor: '',
  currentChar: '',
  foundUser: null,
};

export default function(state = initialState, action) {

  switch (action.type) {

    case types.SEARCH_SELECT_COLOR:
      return { ...state, selectedColor: action.payload.color };

    case types.SEARCH_CHANGE_COLOR_ID:
      return { ...state, colorId: action.payload.colorId };

    case types.SEARCH_FOUND_BY_COLOR_ID:
      return { ...state, foundUser: action.payload.data };

    default:
      return state
  }
}