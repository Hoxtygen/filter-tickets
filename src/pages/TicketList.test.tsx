import { screen } from "@testing-library/react";
import { renderWithProvider } from "../utils/test-utils";
import TicketList from "./TicketList";

describe("TicketList", () => {
  const tickets = [
    {
      ticket_id: "2db0c427-6e4e-4f9e-be54-93389b84b738",
      first_name: "Vincenty",
      last_name: "Jaquiss",
      email: "vjaquiss0@adobe.com",
      description: "Object-based dedicated attitude",
      created_at: "2/10/2022",
      no_of_transfers: "0",
    },
    {
      ticket_id: "5c562d26-e257-4420-bd0a-50fa22de1465",
      first_name: "Ivan",
      last_name: "McVeagh",
      email: "imcveagh1@printfriendly.com",
      description: "Implemented needs-based emulation",
      created_at: "8/12/2022",
      no_of_transfers: "0",
    },
  ];
  it("kdjkfd", () => {
    renderWithProvider(<TicketList tickets={tickets} />);
    const ticketList = screen.getByTestId("ticket-list");
    expect(ticketList).toBeInTheDocument();
  });
});
