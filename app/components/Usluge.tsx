import { Aoboshi_One, Montserrat, Nunito } from "@next/font/google";
import React from "react";
const aboshione = Aoboshi_One({
  weight: ["400"],
  subsets: ["latin"],
});
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["700"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
});
export default function Usluge() {
  return (
    <div id="usluge-poc" className={aboshione.className}>
      <h1>Najuzbudljiviji provod u Srbiji</h1>
      <div className="ispod"></div>
    </div>
  );
}
