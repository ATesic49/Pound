import Navbar from "@/app/components/Navbar";
import Rodjenje from "@/app/o-nama/components/Rodjenje";
import React from "react";

export default function page() {
  return (
    <div className="usluge">
      <Navbar ok="a" />
      <Rodjenje />
    </div>
  );
}
