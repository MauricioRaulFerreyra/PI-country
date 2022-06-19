import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducer'
// import { composeWithDevTools } from 'redux-devtools-extension'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  // composeWithDevTools(applyMiddleware(thunk))
  composeEnhancers(applyMiddleware(thunk))
)

export default store
