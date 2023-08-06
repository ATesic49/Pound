import React from "react";
import Kontakt from "../components/Kontakt";
import Navbar from "../components/Navbar";

export default function page() {
  return (
    <div id="kontakt">
      <Navbar ok="ne" />
      <Kontakt h2={false} />
    </div>
  );
}
