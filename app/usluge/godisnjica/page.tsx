import Navbar from "@/app/components/Navbar";
import Godisnjica from "@/app/o-nama/components/Godisnjica";
import React from "react";

export default function page() {
  return (
    <div className="usluge">
      <Navbar ok="a" />
      <Godisnjica />
    </div>
  );
}
