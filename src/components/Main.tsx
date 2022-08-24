import React from "react";
import { ChildrenProp } from "../types";

export default function Main({ children }: ChildrenProp) {
  return (
    <main className="main">
      <div className="main-inner">{children}</div>
    </main>
  );
}
