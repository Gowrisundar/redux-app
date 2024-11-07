import { ADD, SUBTRACT } from "../actions/types";

const initialState = {output: 0}

const calcReducer = (state=initialState, actions) => {
    switch (actions.type) {
        case ADD:  
            return {...state, output: actions.payload}
        case SUBTRACT:           
            return {...state, output: actions.payload}   
        default:
            return {...state};
    }
}

export default calcReducer