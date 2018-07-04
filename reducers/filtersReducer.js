//Action Types
import * as at from '../actions';

//lodash
import _ from 'lodash'

//Initial State
const initialState = {
	name: '',
	age: {
		selectFrom: 1,
		selectTo: 100,
		min: 1,
		max: 100
	},

	hair: {
		selected: '',
		options: []
	},

	weight: {
		selectFrom: 0.0,
		selectTo: 0.0,
		min: 35.0,
		max: 0.0
	},
	height: {
		selectFrom: 0.0,
		selectTo: 0.0,
		min: 0.0,
		max: 0.0
	},
	professions: {
		selected: '',
		options: []
	},

}

//Default reducer
export default (state = initialState, action) => {
	switch(action.type) {
		case at.FILTERS_UPDATE:

			return 	{...state, 
						professions: { ...state.professions, options: action.data.professions},
						hair: { ...state.hair, options: action.data.hair},
						professions: { ...state.professions, options: action.data.professions},
						height: { ...state.height, min: action.data.heightMin, max: action.data.heightMax},
						weight: { ...state.weight, min: action.data.weightMin, max: action.data.weightMax},
						age: { ...state.age, min: action.data.ageMin, max: action.data.ageMax}
					}
		break;

		case at.FILTERS_CREATE:
			action.data.name = state.name
			return 	action.data
		break;

		case at.FILTERS_SEARCH:
			return {...state, name: action.query }
		
		case at.FILTERS_SET_AGE:
			return {...state, age: {...state.age, selectFrom: action.from, selectTo: action.to}}
		
		case at.FILTERS_SET_WEIGHT:
			return {...state, weight: {...state.weight, selectFrom: action.from, selectTo: action.to}}
		
		case at.FILTERS_SET_HEIGHT:
			return {...state, height: {...state.height, selectFrom: action.from, selectTo: action.to}}
		
		case at.FILTERS_SET_PROFESSION:
			return {...state, professions: {...state.professions, selected: action.profession}}
		
		case at.FILTERS_SET_HAIR:
			return {...state, hair: {...state.hair, selected: action.hair}}
		
		//Default Action
        default: return state
    }
}