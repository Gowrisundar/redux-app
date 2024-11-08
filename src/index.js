//Learning Redux App


//Level 1 and Level 2
/*import { applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";

import {logger} from "redux-logger"

const reducer = function(state, action) {

  let oldState = {...state}//spread Operator

    if(action.type === 'INC') {
      return state + action.payload
    }

    if(action.type === 'DEC') {
      return state - action.payload
    }

    return state
}
//store
const middleware = applyMiddleware(logger)
const store = createStore(reducer, 1, middleware)

//provider
store.subscribe( () => {

  console.log(`Store changed: ${store.getState()}`)

})

//react 
store.dispatch({type: "INC", payload: 5})
store.dispatch({type: "DEC", payload: 3})
store.dispatch({type: "INC", payload: 6})
store.dispatch({type: "MULTIPLY", payload: 10})
*/

//Level 3: multiple reducers

/* import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";

import {logger} from "redux-logger"

import {composeWithDevTools} from "redux-devtools-extension"
//npm install --save-dev redux-devtools-extension --force

const userReducer =(state={}, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return state = {...state, name: action.payload}
    case 'CHANGE_CITY':
      return state = {...state, city: action.payload} 
    default:
      return state
  }
} 

const tweeksReducer =(state=[], action) => {
return state
} 


const allReducers = combineReducers({
  user: userReducer,
  tweets: tweeksReducer
})

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(logger)))

// store = {user: {}, tweeks: []}
//provider
store.subscribe( () => {

  console.log(`Store changed: ${store.getState()}`)

})

store.dispatch({type: 'CHANGE_NAME', payload: 'Gowri'})
store.dispatch({type: 'CHANGE_CITY', payload: 'Chennai'})
store.dispatch({type: 'CHANGE_NAME', payload: 'Sundar'})
store.dispatch({type: 'CHANGE_MAIL', payload: 'gowri@test.com'})
*/


//Level 4: axios (Rest API library - GET, POST, PUT, DELETE)
//async multiple middleware calls - redux thunk
// import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";

// import {logger} from "redux-logger"

// import {composeWithDevTools} from "redux-devtools-extension"

// import {thunk} from "redux-thunk"

// import axios from "axios"

// const initialState= {
//   users: [],
//   error: null,
//   fetching: false,
//   fetched: false
// }

// const reducer = (state = initialState, action) => {

//   switch (action.type) {
//     case 'FETCHING_STARTED':
//       return {...state, fetching: true}
//     case 'RECEIVED_USERS':
//       return {...state, fetching: false, fetched: true}
//     case 'FETCH_ERROR':
//         return {...state, fetching: false, error: action.payload}
 
  
//     default:
//       return state
//   }

// }

// const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, logger)))

// //provider
// store.subscribe( () => {

//   console.log(`Store changed: ${store.getState()}`)

// })


// store.dispatch( (dispatch) => {
//   dispatch({type: 'FETCHING_STARTED'})
//   axios.get("https://jsonplaceholder.typicode.com/users")
//   .then(response => {
//     dispatch({type: 'RECEIVED_USERS', payload: response.data} )
//   }).catch (error => {
//     dispatch({type: 'FETCH_ERROR', payload: error})
//   })
// })










import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import { store } from './bankProject/store/config.dev';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

