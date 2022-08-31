import Header from "../components/Header";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import TicketList from "../pages/TicketList";
import React, { Fragment, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { ticketActions } from "../app/features/tickeSlice";

export default function Home() {
  const [selected, setSelected] = useState<string[]>(["all"]);

  const dispatch = useAppDispatch();
  const filteredTickets = useAppSelector((state) => state.tickets.filteredTickets);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const removeDefaultAll = selected.filter((value) => value !== "all");
    if (selected.includes("all")) {
      setSelected([...removeDefaultAll, e.target.value]);
    } else {
      if (selected.includes(e.target.value)) {
        setSelected(selected.filter((id) => id !== e.target.value));
      } else {
        setSelected([...selected, e.target.value]);
      }
    }
  };

  useEffect(() => {
    if (selected.length === 0) {
      setSelected(["all"]);
    }
  }, [selected]);

  const handleOnly = (transferTimes: string) => {
    setSelected([transferTimes]);
  };

  useEffect(() => {
    dispatch(ticketActions.getFilteredTickets(selected));
  }, [dispatch, selected]);

  return (
    <div data-testid = "home">
      <Header>
        <h2 data-testid = "main-title" className="app-title">Ticket Filtering</h2>
      </Header>
      <Main>
        <Sidebar
          handleChange={handleChange}
          handleOnly={handleOnly}
          selected={selected}
        />
        <TicketList tickets={filteredTickets} />
      </Main>
    </div>
  );
}
