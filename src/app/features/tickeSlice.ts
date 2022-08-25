import {  TicketProps } from './../../types/index';
import {  createSlice } from "@reduxjs/toolkit";
import ticketData from "../../data/ticketData.json";
import { filterTickets } from "../../utils";



interface InitialStateProp {
	tickets: TicketProps[],
	filteredTickets: TicketProps[]
}

const initialState: InitialStateProp = {
	tickets: ticketData,
	filteredTickets: []

}

export const billets = createSlice({
	name: "ticketSlice",
	initialState,
	reducers: {
		getTickets: (state, action) => {
			state.tickets = action.payload
			return {
				tickets: action.payload,
				filteredTickets: [...action.payload]

			}
		},
		getFilteredTickets: (state, action) => {
			const filtered = filterTickets(state.tickets, action.payload)
			return {
				...state,
				filteredTickets: filtered
			}
		}
	}
})

export const billetActions = billets.actions;
 const { reducer} = billets
export  default reducer