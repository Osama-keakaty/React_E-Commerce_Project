import {compose ,legacy_createStore as createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import {rootReducer} from './root-reducer'
const middleWares = [logger]
const Enhanced = compose(applyMiddleware(...middleWares))

// export const create = createStore(rootReducer,undefined,Enhanced);
export const store = createStore(rootReducer,undefined,Enhanced);
