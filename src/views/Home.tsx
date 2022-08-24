import Header from "../components/Header";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import TicketList from "../pages/TicketList";
import React, {  useState } from "react";
import ticketData from "../data/ticketData.json"

export default function Home() {
  const [selected, setSelected] = useState<string[]>([]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelected([...selected, e.target.value]);
    } else {
      setSelected(selected.filter((value) => value !== e.target.value));
    }
  };



  return (
    <>
      <Header>
        <h2>Ticket Filtering Arena</h2>
      </Header>
      <Main>
        <Sidebar handleChange={handleChange} />
        <TicketList tickets={ticketData} />
      </Main>
    </>
  );
}
