// Action Types
import * as at from '../actions'

// Initial State
const initialState = {
  items: [],
  display: [],
  page: 1,
  itemsPerPage: 10
}

export default (state = initialState, action) => {
  switch(action.type){
    case at.INHABITANTS_FETCH:
      return {...state, items: action.data, display: action.data, page: 1}

    case at.INHABITANTS_DISPLAY_ITEMS:
      return {...state, display: action.items, page: 1}

    case at.INHABITANTS_ONE_MORE_PAGE:
      return {...state, page: state.page + 1}

    default: return state
  }
}
