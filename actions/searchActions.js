//Action Types
import * as at from './index'

//Filters Actions
import * as filterActions from './filtersActions'

//Lodash
import * as _ from 'lodash'

/**
 * Search in for names in array
 */
export const search = (query) => 
    (dispatch, getState) => {
        	
		const state = getState()
		const db = state.inhabitants.items
	
		let needles = query.trim().toLowerCase().split(' ')
		let results = []
	
		for(var i in db){
			//Set Score
			let score = 0

			//If no query show all
			if(query == '') score = 1

			for(let x in needles) 
				if(db[i].name.trim().toLowerCase().search(needles[x]) != -1)
					score++

			if(score){
				let item = {...db[i]}
				item.score = score
				results.push(item)
			}
		}
	
		//order by score
		results = _.orderBy(results, ['score', 'name'], ['desc', 'asc'])
	
		
		//Show Filter applied
		dispatch({type: at.FILTERS_SEARCH, query})

		//Filter items
		dispatch({type: at.INHABITANTS_DISPLAY_ITEMS, items: results})

		//Create new filters
		dispatch(filterActions.createFilters('create'))
}
