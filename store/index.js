// Redux
import { createStore, applyMiddleware } from 'redux';

// Middlewares
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

// reducers
import reducers from '../reducers'

// Create middleware
let middlewares = applyMiddleware(thunkMiddleware, promiseMiddleware());

// If in DEV mode
if(process.env.NODE_ENV == 'development'){
  middlewares = composeWithDevTools(middlewares)
}

// Return Store
export default (initialState = {}) =>
  createStore(reducers, initialState, middlewares)
