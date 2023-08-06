import React from "react";
import { Aoboshi_One, Montserrat, Nunito, Cairo } from "@next/font/google";
import Link from "next/link";
const cairo = Cairo({
  weight: ["400"],
  subsets: ["latin"],
});
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
export default function Slike() {
  return (
    <div id="slike" className={aboshione.className}>
      <div className="h1">
        <h2>
          Proverite na<span className={montserrat.className}>š</span> prostor
        </h2>
        <div className="ispod">
          <div className="img">
            <img src="/glavna-soba.jpg" alt="glavna-soba" title="glavna-soba" />
            <h3 className={montserrat.className}>Glavna soba</h3>
          </div>
          <div className="img">
            <img src="/pocetna.jpeg" alt="" />
            <h3 className={montserrat.className}>Glavna soba</h3>
          </div>
          <div className="img">
            <img src="/pocetna.jpeg" alt="" />
            <h3 className={montserrat.className}>Glavna soba</h3>
          </div>
          <div className="img">
            <img src="/pocetna.jpeg" alt="" />
            <h3 className={montserrat.className}>Glavna soba</h3>
          </div>
          <div className="img">
            <img src="/pocetna.jpeg" alt="" />
            <h3 className={montserrat.className}>Glavna soba</h3>
          </div>
          <div className="img">
            <img src="/pocetna.jpeg" alt="" />
            <h3 className={montserrat.className}>Glavna soba</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
