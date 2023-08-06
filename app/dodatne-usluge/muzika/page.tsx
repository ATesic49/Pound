import Navbar from "@/app/components/Navbar";
import { Aoboshi_One, Montserrat } from "@next/font/google";
import Link from "next/link";
import React from "react";
import "../../../public/css/dodatne-usluge.css";
const aoboshione = Aoboshi_One({
  weight: ["400"],
  subsets: ["latin"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
});
export default function page() {
  return (
    <div className={`${aoboshione.className} dusluge`}>
      <Navbar ok="ne" />
      <div className="container dodatneM">
        <h1>Muzika</h1>
        <p>
          Ukoliko želite muziku uživo, na raspolaganju su vam trubači i naš
          bend, koji će se pobrinuti za to da ludujete do zore.
        </p>
        <ul>
          <li>Rock</li>
          <li>Pop</li>
          <li>Folk</li>
          <li>Narodjnjaci</li>
          <li>Starogradske</li>
        </ul>
        <div className="a">
          <Link href="https://wa.me/38164650475" className="aoboshione">
            Pozovi
          </Link>
        </div>
      </div>
    </div>
  );
}
