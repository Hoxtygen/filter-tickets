import { render, screen } from "@testing-library/react";
import Ticket from "./Ticket";

describe("Ticket component", () => {
  const ticket = {
    ticket_id: "a475d99f-ab0d-4d6a-8e32-a0397f6838cc",
    first_name: "Gibbie",
    last_name: "Block",
    email: "gblockv@amazon.com",
    description: "Face to face impactful migration",
    created_at: "12/21/2021",
    no_of_transfers: "3",
  };
  it("should render Ticket component", () => {
    render(<Ticket {...ticket} />);
    expect(screen.getByText("Ticket ID:")).toBeInTheDocument();
    expect(screen.getByText("Description:")).toBeInTheDocument();
    expect(screen.getByText("Created by:")).toBeInTheDocument();
    expect(screen.getByText("Email:")).toBeInTheDocument();
    expect(screen.getByText("Date created:")).toBeInTheDocument();
    expect(screen.getByText("Transfer times:")).toBeInTheDocument();
  });
});
