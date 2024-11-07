import { applyMiddleware, legacy_createStore as createStore } from "redux";

import logger from "redux-logger";

import {composeWithDevTools} from 'redux-devtools-extension'

import calcReducer from '../reducers/calcReducer'

export const store = createStore (calcReducer, composeWithDevTools(applyMiddleware(logger)))

store.subscribe(() => console.log(store.getState))

