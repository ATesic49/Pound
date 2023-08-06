import Navbar from "@/app/components/Navbar";
import Korporativni from "@/app/o-nama/components/Korporativni";
import React from "react";

export default function page() {
  return (
    <div className="usluge">
      <Navbar ok=";" />
      <Korporativni />
    </div>
  );
}
