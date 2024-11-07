//business Logics in the Actions

import { type } from "@testing-library/user-event/dist/type"
import { ADD } from "./types"
import { SUBTRACT } from "./types"

export const addInputs=(input1, input2) => {
    let output = input1 + input2
    return {type: ADD, payload: output}
}

export const subtractInput=(input1, input2) => {
    let output = input1 - input2
    return {type: SUBTRACT, payload: output}
}