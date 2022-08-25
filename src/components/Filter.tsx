import React from "react";
import { FilterProp } from "../types";

export default function Filter({
  handleChange,
  handleOnly,
  selected,
}: FilterProp) {
  const transferTypes = [
    { name: "all", transferTimes: "all", label: "All" },
    { name: "none", transferTimes: "0", label: "No transfers" },
    { name: "one", transferTimes: "1", label: "1 transfer" },
    { name: "two", transferTimes: "2", label: "2 transfers" },
    { name: "three", transferTimes: "3", label: "3 transfers" },
  ];
  return (
    <>
      {transferTypes.map((type) => (
        <div key={type.name} className = "input-wrapper">
          <input
              type="checkbox"
              value={type.transferTimes}
              id={type.name}
              onChange={handleChange}
              name={type.label}
              checked={selected.includes(type.transferTimes)}
            />{" "}
          <label className="form-control" htmlFor={type.name}>
            <span> {type.label}</span></label>
            {type.label !== "All" && (
              <button
                className="only"
                onClick={() => handleOnly(type.transferTimes)}
              >
                Only
              </button>
            )}
        </div>
      ))}
    </>
  );
}
