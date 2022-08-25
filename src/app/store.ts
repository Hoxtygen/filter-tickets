import { configureStore } from "@reduxjs/toolkit";
import tickeReducer from "./features/tickeSlice"


 const store =  configureStore({
	reducer: tickeReducer
})

export type RootState  = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store		