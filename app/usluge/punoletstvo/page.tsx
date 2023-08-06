import Navbar from "@/app/components/Navbar";
import Punoletstvo from "@/app/o-nama/components/Punoletstvo";
import React from "react";

export default function page() {
  return (
    <div className="usluge">
      <Navbar ok="as" />
      <Punoletstvo />
    </div>
  );
}
