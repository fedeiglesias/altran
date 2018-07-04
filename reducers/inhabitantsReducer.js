//Action Types
import * as at from '../actions';

//Initial State
const initialState = {
    items: [],
    display: [],
    page: 1,
    itemsPerPage: 10,   
}

//Default reducer
export default (state = initialState, action) => {
    switch(action.type) {
        
        //Make something
        case at.INHABITANTS_FETCH: 
            return { ...state, items: action.data, display: action.data, page: 1 }
        
        //Make something
        case at.INHABITANTS_DISPLAY_ITEMS: 
            return { ...state, display: action.items, page: 1 }

        //Make something
        case at.INHABITANTS_ONE_MORE_PAGE: 
            return { ...state, page: state.page + 1 }
            
        //Default Action
        default: return state
    }
}