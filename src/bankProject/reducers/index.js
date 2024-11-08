import { combineReducers} from "redux"
import bankReducer from './bankReducer'


const rootReducer = combineReducers({
    account: bankReducer
})

export default rootReducer