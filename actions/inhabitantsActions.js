/**
 * If we are running this code from server, nodejs
 * needs this library to fetch api data
 */
import fetch from 'node-fetch'
import * as at from './index'
import * as filterActions from './filtersActions'

const SERVER_END_POINT = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'

/**
 * In this case we obtain all the data at the same time
 * from the backend, but in the case that the backend
 * accepts parameters, we can send them to obtain
 * only the data that we need
 */
export const getInhabitants = () => async(dispatch, getState) => {
  let result = await fetch(SERVER_END_POINT)
  let json = await result.json()

  json.Brastlewark.map((item, i) => {
    item.id = i
    return item
  })

  dispatch({type: at.INHABITANTS_FETCH, data: json.Brastlewark})
  dispatch(filterActions.createFilters('create'))
}
