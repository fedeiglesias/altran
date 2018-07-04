/**
 * If we are running this code from server, nodejs
 * needs this librari to fetch api data
 */
import fetch from 'node-fetch'

//Action Types
import * as at from './index'

//Actions
import * as filterActions from './filtersActions'

//Backend
const SERVER_END_POINT = "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"

/**
 * In this case we obtain all the data at the same time 
 * from the backend, but in the case that the backend 
 * accepts parameters, we can send them to obtain 
 * only the data that we need
 */
export const getInhabitants = () => 
    (dispatch, getState) => {
       
        //Call server
        return fetch(SERVER_END_POINT)
            .then(res => res.json())
            .then(json => {

                //Add 'id' for filter propouses
                json.Brastlewark.forEach(function(obj,i) { obj.id = i+1})
                
                //Save data
                dispatch({ type: at.INHABITANTS_FETCH, data: json.Brastlewark })

                //Update filters view
                dispatch(filterActions.createFilters('create'))
            })
}

