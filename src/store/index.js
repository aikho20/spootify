import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import songsReducer from './reducers/songsReducer'
import requestReducers from './reducers/requestReducers'
import tokenReducers from './reducers/tokenReducers'
export const history = createBrowserHistory()

const rootReducer = combineReducers({
    router: connectRouter(history),
    request: requestReducers,
    songs: songsReducer,
    token: tokenReducers,
})

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
)

export default store
