import { createStore, applyMiddleware } from 'redux'
import reducers from './reducer'
import ReduxPromise from 'redux-promise'

const createStoreWithMiddleware = createStore(
    reducers,
    applyMiddleware(ReduxPromise)
    );

export default createStoreWithMiddleware;
