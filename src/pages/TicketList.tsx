import React from "react";
import Ticket from "../components/Ticket";
import { TicketProps, TicketListProps } from "../types";

export default function TicketList({ tickets }: TicketListProps) {
  return (
    <div data-testid = "ticket-list" className="ticket-list">
      <div className="ticket-list-inner">
        {tickets.map((ticket: TicketProps) => (
          <Ticket key={ticket.ticket_id} {...ticket} />
        ))}
      </div>
    </div>
  );
}
