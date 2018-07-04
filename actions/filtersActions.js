//Action Types
import * as actionTypes from './index'

//loadash
import {cloneDeep} from 'lodash'

export const createFilters = (mode) => (dispatch, getState) => {
	//items
	const state = getState()
	let items = state.inhabitants.display
	
	let f = cloneDeep(state.filters);

	f.age.min = null
	f.age.max = null
	f.weight.min = null
	f.weight.max = null
	f.height.min = null
	f.height.max = null
	f.hair.options = []
	f.professions.options = []


	for(var i in items){
		//Initialize
		if(!f.age.min) f.age.min = items[i].age
		if(!f.age.max) f.age.max = items[i].age  
		if(!f.weight.min) f.weight.min = items[i].weight
		if(!f.weight.max) f.weight.max = items[i].weight  
		if(!f.height.min) f.height.min = items[i].height
		if(!f.height.max) f.height.max = items[i].height

		//Get Max's and Min's
		if(f.age.min > items[i].age) f.age.min = items[i].age
		if(f.age.max < items[i].age) f.age.max = items[i].age

		if(f.weight.min > items[i].weight) f.weight.min = items[i].weight
		if(f.weight.max < items[i].weight) f.weight.max = items[i].weight
		
		if(f.height.min > items[i].height) f.height.min = items[i].height
		if(f.height.max < items[i].height) f.height.max = items[i].height
		
		if(items[i].hair_color)
			if(f.hair.options.indexOf(items[i].hair_color) == -1) 
				f.hair.options.push(items[i].hair_color)
		
		for(let x in items[i].professions) 
			if(f.professions.options.indexOf(items[i].professions[x]) == -1)
				f.professions.options.push(items[i].professions[x])
	}

	
	if(mode == 'create'){
		f.age.selectFrom = f.age.min
		f.age.selectTo = f.age.max
		f.weight.selectFrom = f.weight.min
		f.weight.selectTo = f.weight.max
		f.height.selectFrom = f.height.min
		f.height.selectTo = f.height.max
		f.professions.selected = ''
		f.hair.selected = ''
	}

	dispatch({type: actionTypes.FILTERS_CREATE, data: f})
}