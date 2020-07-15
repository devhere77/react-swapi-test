import {applyMiddleware, createStore} from "redux";
import {setSidebar, userReducer} from "./reducer";
import { combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
const reduxThunk = require('redux-thunk').default;
const reducers = combineReducers({ setSidebar, userReducer })

const enhancer = composeWithDevTools(applyMiddleware(reduxThunk));
export const Store = createStore(reducers, {} ,enhancer);