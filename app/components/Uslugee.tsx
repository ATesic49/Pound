import React from "react";
import { Aoboshi_One, Nunito, Montserrat } from "@next/font/google";
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
export default function Uslugee() {
  return (
    <>
      <div id="uslugeeh1" className={aboshione.className}>
        <h1>~ &nbsp;&nbsp;Tip Proslave &nbsp;&nbsp;~</h1>
      </div>
      <div id="uslugee" className={aboshione.className}>
        <Link href="/usluge/punoletstvo">
          <img src="/svgs/osamnestii.svg" alt="" />
          <h2>Proslava punoletstva</h2>
        </Link>
        <Link href="/usluge/godisnjica">
          <img src="/svgs/godisnjicaa.svg" alt="" />
          <h2>
            Proslava godi<span className={montserrat.className}>š</span>njice
          </h2>
        </Link>
        <Link href="/usluge/rodjenje-deteta">
          <img src="/svgs/detee.svg" alt="" />
          <h2>
            Ro<span className={montserrat.className}>đ</span>enje deteta
          </h2>
        </Link>
        <Link href="/usluge/korporativni-dogadjaj">
          <img src="/svgs/cocktail.svg" alt="" />
          <h2>
            Korporativni Doga<span className={montserrat.className}>đ</span>aj
          </h2>
        </Link>
        <Link href="/usluge/tinejdzerska-proslava">
          <img src="/svgs/teen.svg" alt="" />
          <h2>
            Tinejdzerska <span className={montserrat.className}>ž</span>urka
          </h2>
        </Link>
      </div>
    </>
  );
}
