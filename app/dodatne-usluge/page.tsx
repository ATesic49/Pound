import React from "react";
import Navbar from "../components/Navbar";
import Swiperr from "../usluge/components/Swiper";

export default function page() {
  return (
    <div id="dodatne">
      <Navbar ok={"da"} />
      <Swiperr />
    </div>
  );
}
