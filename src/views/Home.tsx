import Header from "../components/Header";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import TicketList from "../pages/TicketList";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { ticketActions } from "../app/features/tickeSlice";

export default function Home() {
  const [selected, setSelected] = useState<string[]>([]);

  const dispatch = useAppDispatch();
  const filteredTickets = useAppSelector((state) => state.filteredTickets);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelected([...selected, e.target.value]);
    } else {
      setSelected(selected.filter((value) => value !== e.target.value));
    }
  };

  useEffect(() => {
    dispatch(ticketActions.getFilteredTickets(selected));
  }, [dispatch, selected]);

  return (
    <>
      <Header>
        <h2>Ticket Filtering</h2>
      </Header>
      <Main>
        <Sidebar handleChange={handleChange} />
        <TicketList tickets={filteredTickets} />
      </Main>
    </>
  );
}
