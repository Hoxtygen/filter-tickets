import React from "react";
import { ChangeProp } from "../types";
import Filter from "./Filter";

export default function Sidebar({ handleChange }: ChangeProp) {
  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <Filter handleChange={handleChange} />
      </div>
    </aside>
  );
}
