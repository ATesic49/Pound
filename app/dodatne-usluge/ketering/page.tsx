import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import React from "react";
import "../../../public/css/dodatne-usluge.css";
export default function page() {
  return (
    <div className={` dusluge`}>
      <Navbar ok="ne" />
      <div className="container">
        <h1>Ketering</h1>
        <p>
          Naš ketering tim je posvećen pružanju raznih opcija i prilagodjavanju
          hrane prema Vašim željama i potrebama. S posebnom pažnjom pristupamo
          dogovoru s Vama, slavljenikom, kako bismo osigurali da se hrana uklapa
          u Vaš jedinstveni stil i temu proslave.
        </p>
        <ul>
          <li>Piletina</li>
          <li>Rolovano belo</li>
          <li>Kiflice sa sirom</li>
          <li>Cevapi</li>
          <li>Veganske Kiflice</li>
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
