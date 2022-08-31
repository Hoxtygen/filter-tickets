import { fireEvent, screen } from "@testing-library/react";
import App from "./App";
import { renderWithProvider } from "./utils/test-utils";

describe("<App/>", () => {
  const allTickets = {
    tickets: [
      {
        ticket_id: "2db0c427-6e4e-4f9e-be54-93389b84b738",
        first_name: "Vincenty",
        last_name: "Jaquiss",
        email: "vjaquiss0@adobe.com",
        description: "Object-based dedicated attitude",
        created_at: "2/10/2022",
        no_of_transfers: "1",
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
      {
        ticket_id: "3a049ffb-5100-428a-95e4-c5bc356ee23f",
        first_name: "Greta",
        last_name: "Favill",
        email: "gfavill8@google.co.uk",
        description: "Persevering maximized secured line",
        created_at: "5/9/2022",
        no_of_transfers: "2",
      },
      {
        ticket_id: "4b7b4af3-d5be-4f71-bee1-5706a1c2af2a",
        first_name: "Raimund",
        last_name: "Abells",
        email: "rabellsi@soundcloud.com",
        description: "Exclusive asynchronous protocol",
        created_at: "1/16/2022",
        no_of_transfers: "3",
      },
    ],
    filteredTickets: [],
  };
  it("shows the app heading", () => {
    renderWithProvider(<App />, {
      preloadedState: {
        tickets: allTickets,
      },
    });
    expect(screen.getByTestId("main-title")).toHaveTextContent(
      "Ticket Filtering"
    );
  });

  it("should show sidebar title", () => {
    renderWithProvider(<App />, {
      preloadedState: {
        tickets: allTickets,
      },
    });
    const sidebarTitle = screen.getByTestId("sidebar-title");
    expect(sidebarTitle).toHaveTextContent(/Number of Transfers/i);
  });

  it("should get all the checkboxes", () => {
    renderWithProvider(<App />, {
      preloadedState: {
        tickets: allTickets,
      },
    });

    const checkboxInputs = screen.getAllByRole("checkbox");
    expect(checkboxInputs).toHaveLength(5);
  });
  it("should filter by one transfer", () => {
    renderWithProvider(<App />, {
      preloadedState: {
        tickets: allTickets,
      },
    });
    const oneTransferInputLabel = screen.getByLabelText(/1 transfer/i);
    const zeroTransferText = screen.getByText(
      "5c562d26-e257-4420-bd0a-50fa22de1465"
    );
    const oneTransferText = screen.getByText(
      "2db0c427-6e4e-4f9e-be54-93389b84b738"
    );

    const twoTransfersText = screen.getByText(
      "3a049ffb-5100-428a-95e4-c5bc356ee23f"
    );
    const threeTransfersText = screen.getByText(
      "4b7b4af3-d5be-4f71-bee1-5706a1c2af2a"
    );

    fireEvent.change(oneTransferInputLabel, { target: { value: "1" } });
    fireEvent.click(oneTransferInputLabel);
    expect(oneTransferText).toBeInTheDocument();
    expect(zeroTransferText).not.toBeInTheDocument();
    expect(twoTransfersText).not.toBeInTheDocument();
    expect(threeTransfersText).not.toBeInTheDocument();
  });

  it("should filter by no transfers", () => {
    renderWithProvider(<App />, {
      preloadedState: {
        tickets: allTickets,
      },
    });
    const zeroTransferInputLabel = screen.getByLabelText(/no transfers/i);
    const zeroTransferText = screen.getByText(
      "5c562d26-e257-4420-bd0a-50fa22de1465"
    );
    const oneTransferText = screen.getByText(
      "2db0c427-6e4e-4f9e-be54-93389b84b738"
    );
    const twoTransfersText = screen.getByText(
      "3a049ffb-5100-428a-95e4-c5bc356ee23f"
    );
    const threeTransfersText = screen.getByText(
      "4b7b4af3-d5be-4f71-bee1-5706a1c2af2a"
    );
    fireEvent.change(zeroTransferInputLabel, { target: { value: "0" } });
    fireEvent.click(zeroTransferInputLabel);
    expect(zeroTransferText).toBeInTheDocument();
    expect(oneTransferText).not.toBeInTheDocument();
    expect(twoTransfersText).not.toBeInTheDocument();
    expect(threeTransfersText).not.toBeInTheDocument();
  });
});
