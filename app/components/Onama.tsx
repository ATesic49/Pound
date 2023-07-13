import React from "react";
import { Aoboshi_One, Nunito, Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
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
export default function Onama() {
  return (
    <div id="o-nama-poc" className={aboshione.className}>
      <h1>Najuzbudljiviji provod u Beogradu</h1>
      <div className="ispod">
        <div className="p">
          <p className={aboshione.className}>
            Dobrodo<span className={montserrat.className}>š</span>li u klub
            Pound - najidealnije mesto za organizaciju Va
            <span className={montserrat.className}>š</span>eg doga
            <span className={montserrat.className}>đ</span>aja! Klub Pound savr
            <span className={montserrat.className}>š</span>en je za sve vrste
            posebnih prilika i zabava. Bilo da planirate korporativno
            okupljanje, ro
            <span className={montserrat.className}>đ</span>
            endansku proslavu ili neki drugi va
            <span className={montserrat.className}>ž</span>an doga
            <span className={montserrat.className}>đ</span>aj, na
            <span className={montserrat.className}>š</span> klub pru
            <span className={montserrat.className}>ž</span>a neverovatnu
            atmosferu i fleksibilnost da se prilagodi Va
            <span className={montserrat.className}>š</span>im potrebama.
          </p>
        </div>
        <div className="img">
          <div className="thecard">
            <img className="frontface" src="/pocetna2.jpeg"></img>
            <div className="backface">
              <div className="dugme">
                <Link href="/slike" className={`link ${montserrat.className}`}>
                  Pogledaj Još Slika
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
