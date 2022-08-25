export interface TicketProps {
	first_name: string;
	last_name: string;
	email: string;
	description: string;
	created_at: string;
	no_of_transfers: string;
	ticket_id: string;
}

export interface TicketListProps {
	tickets: TicketProps[]
}

export interface ChildrenProp {
	children: React.ReactNode;
}

export interface FilterProp {
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleOnly: (transferTimes: string) => void;
	selected: string[]


}
