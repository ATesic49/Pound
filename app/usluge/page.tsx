import React from "react";
import Navbar from "../components/Navbar";
import Usluge from "../components/Usluge";
import SwiperOnama from "../o-nama/components/SwiperOnama";
import Swiper from "./components/Swiper";
import "swiper/css";

export default function page() {
  return (
    <div id="usluge">
      <Navbar ok="ne" />

      <SwiperOnama />
    </div>
  );
}
