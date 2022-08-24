import React, { Fragment } from "react";
import { ChangeProp } from "../types";


export default function Filter({ handleChange }: ChangeProp) {
  const transferTypes = [
    { name: "All", transferTimes: "all" },
    { name: "No transfers", transferTimes: "0" },
    { name: "1 transfer", transferTimes: "1" },
    { name: "2 transfers", transferTimes: "2" },
    { name: "3 transfers", transferTimes: "3" },
  ];
  return (
    <>
      {transferTypes.map((type) => (
        <Fragment key={type.name}>
          <label htmlFor="">
            <input
              type="checkbox"
              value={type.transferTimes}
              id=""
              onChange={handleChange}
            />{" "}
            {type.name}
          </label>
        </Fragment>
      ))}
    </>
  );
}
