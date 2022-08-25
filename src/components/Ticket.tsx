import React from "react";
import { TicketProps } from "../types";

export default function Ticket(ticket: TicketProps) {
  return (
    <div className="ticket-item">
      <p>
        <span className="caption">Ticket ID:</span> {ticket.ticket_id}
      </p>
      <p>
        <span className="caption">Description:</span> {ticket.description}
      </p>
      <p>
        <span className="caption">Created by: </span>
        {ticket.first_name} {ticket.last_name}
      </p>
      <p>
        <span className="caption"> Email:</span> {ticket.email}
      </p>
      <p>
        <span className="caption"> Date created:</span> {ticket.created_at}
      </p>
      <p>
        <span className="caption">Transfer times: </span>
        {ticket.no_of_transfers}
      </p>
    </div>
  );
}
