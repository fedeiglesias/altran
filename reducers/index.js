// Redux
import {combineReducers} from 'redux'

// Reducers
import InhabitantsReducer from './inhabitantsReducer'
import FiltersReducer from './filtersReducer'

// Combine reducers and export
export default combineReducers({
  inhabitants: InhabitantsReducer,
  filters: FiltersReducer
})
