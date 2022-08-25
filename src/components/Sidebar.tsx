import React from "react";
import { FilterProp } from "../types";
import Filter from "./Filter";

export default function Sidebar({
  handleChange,
  handleOnly,
  selected,
}: FilterProp) {
  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <Filter
          handleChange={handleChange}
          handleOnly={handleOnly}
          selected={selected}
        />
      </div>
    </aside>
  );
}
