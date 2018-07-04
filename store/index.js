//Redux
import { createStore, applyMiddleware } from 'redux'

//Middlewares
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'

//reducers
import reducers from '../reducers'


//Create middleware
let middlewares = applyMiddleware(thunkMiddleware, promiseMiddleware());

//In dev mode
if(process.env.NODE_ENV == 'development')
    middlewares = composeWithDevTools(middlewares)


//Create Store
export default createStore(reducers, middlewares)