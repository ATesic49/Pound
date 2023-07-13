import React from "react";
import Navbar from "../components/Navbar";
import Usluge from "../components/Usluge";
import Swiper from "./components/Swiper";

export default function page() {
  return (
    <div id="usluge">
      <Navbar ok="ne" />
      <Usluge />
      <Swiper />
    </div>
  );
}
