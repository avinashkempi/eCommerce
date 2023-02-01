import { applyMiddleware, createStore } from 'redux'
import ShopApp from "./reducer"
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

const store = createStore(ShopApp, composeWithDevTools(applyMiddleware(logger)));


export default store;