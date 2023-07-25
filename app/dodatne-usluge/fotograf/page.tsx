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
      <div className="container foto">
        <h1>Fotograf</h1>
        <p>
          Naš fotograf je stručan u hvatanju najboljih fotografija koje će se
          večno pamtiti. Cena našeg fotografa iznosi samo 30 eura na sat vremena
          prisustva na vašem događaju.
        </p>
        {/* <ul>
          <li>Piletina</li>
          <li>Rolovano belo</li>
          <li>Kiflice sa sirom</li>
          <li>Cevapi</li>
          <li>Veganske Kiflice</li>
        </ul> */}
        <div className="a">
          <Link href="https://wa.me/38164650475" className="aoboshione">
            Pozovi
          </Link>
        </div>
      </div>
    </div>
  );
}
