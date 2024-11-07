import calcReducer from '../reducers/calcReducer'
import {ADD,SUBTRACT} from '../actions/types'

const initialState = {
    output: 0
}

describe('Test Suite - calcReducer', () => {
    it('Reducer for ADD', () => {
        let state= {output:0}
        state = calcReducer(0, {type: ADD, payload: 50})
        expect(state).toEqual({output: 50})

    })

    it('Reducer for SUBTRACT', () => {
        let state= {output:0}
        state = calcReducer(0, {type: SUBTRACT, payload: 40})
        expect(state).toEqual({output: 40})
    })
})