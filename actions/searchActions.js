import * as at from './index';
import * as filterActions from './filtersActions';
import * as _ from 'lodash';

export const search = (query) => (dispatch, getState) => {
  const state = getState();
  const db = state.inhabitants.items;

  let needles = query.trim().toLowerCase().split(' ');
  let results = [];

  for (var i in db) {
    let score = 0;
    if(query === ''){ score = 1 }

    for (let x in needles) {
      if(db[i].name.trim().toLowerCase().search(needles[x]) !== -1){ score++ }
    }

    if (score) {
      let item = {...db[i]};
      item.score = score;
      results.push(item);
    }
  }

  // order by score
  results = _.orderBy(results, ['score', 'name'], ['desc', 'asc']);

  // Show Filter applied
  dispatch({type: at.FILTERS_SEARCH, query});

  // Filter items
  dispatch({type: at.INHABITANTS_DISPLAY_ITEMS, items: results});

  // Create new filters
  dispatch(filterActions.createFilters('create'));
};
