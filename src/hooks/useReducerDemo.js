// import React from 'react'
// import { useReducer } from 'react'

// const initialState = {store: 10}

// function reducer(state, action) {
// switch (action.type) {
//     case 'HIKE':   
//         return {score: state.score + action.payload}

//     case 'REDEEM':    
//         return {score: state.score - action.payload}

//     default:
//         return state
// }

// }

// const UseReducerDemo = () => {
//     const [state, dipatch] = useReducer(reducer, initialState)


//     return (
//     <div className='container bg-warning'>
//         <h3>userReducer Demo</h3>
//         <h4 className='bg-primary'> Score: {state.score}</h4>

//         <button className='btn btn-success' onClick={ () => dispatchEvent({type: 'HIKE', payload: 10})}>
//             Hike score by 100</button>

//         <button className='btn btn-danger' onClick={ () => dispatchEvent({type: 'REDEEM', payload: 10})}>
//             Redeem Points</button>
//     </div>
//     )
// }

// export default UseReducerDemo


import React, { useReducer } from 'react'

//store 
const initialState= {score: 10}

//reducer
function reducer(state,action) {
  switch (action.type){
    case 'HIKE' :
        return {score : state.score + action.payload}
    case "REDEEM" :
        return {score : state.score - action.payload}
    default : return state
  }
}

//container
const UseReducerDemo = () => {
        const [ state,dispatch] = useReducer(reducer, initialState)

  return (
    <div className="container bg-warning">
        <h3>useReducer Demo</h3>
        <h4 className="bg-primary"> Score :  { state.score}</h4>

              <button className="btn btn-success" 
              onClick={ ()=>dispatch (  {type: 'HIKE' , payload: 100})}> 
              Hike score by 100</button>

              <button className="btn btn-danger" 
              onClick={ ()=>dispatch (  {type: 'REDEEM' , payload: 100})}> 
              Redeem points</button>
    </div>
  )
}

export default UseReducerDemo