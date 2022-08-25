import { TicketProps } from './../types/index';


export function isArrayEmpty(strArray: string[]) {
	return typeof strArray !== "undefined" && strArray.length === 0
}

export const filterTickets = (tickets: TicketProps[], filters: string[]) => {
	if (isArrayEmpty(filters) || filters.includes("all")) {
		return tickets
	}
	return tickets.filter(
		(ticket) =>
			filters.includes(ticket.no_of_transfers) && ticket
	)
}
