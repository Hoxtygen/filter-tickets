import { combineReducers } from "@reduxjs/toolkit"
import tickeReducer from "./features/tickeSlice"

const rootReducer = combineReducers({
	tickets: tickeReducer

})

export default rootReducer