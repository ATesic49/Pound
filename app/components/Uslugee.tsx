import React from "react";
import {  Montserrat } from "next/font/google";
import Link from "next/link";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
});
export default function Uslugee({ h2 }: { h2: boolean }) {
  return (
    <>
      <div id="uslugeeh1">
        {h2 ? (
          <h2 className="tip-proslave">~ &nbsp;&nbsp;Tip Proslave &nbsp;&nbsp;~</h2>
        ) : (
          <h1 >~ &nbsp;&nbsp;Tip Proslave &nbsp;&nbsp;~</h1>
        )}
      </div>
      <div id="uslugee">
        <Link href="/usluge/punoletstvo">
          <img
            src="/svgs/osamnestii.svg"
            alt="punoletstvo"
            title="punoletstvo"
          />
          <h2>Proslava punoletstva</h2>
        </Link>
        <Link href="/usluge/godisnjica">
          <img
            src="/svgs/godisnjicaa.svg"
            alt="godisnjica"
            title="godisnjica"
          />
          <h2>
            Proslava godi<span className={montserrat.className}>š</span>njice
          </h2>
        </Link>
        <Link href="/usluge/rodjenje-deteta">
          <img
            src="/svgs/detee.svg"
            alt="rodjenje-deteta"
            title="rodjenje-deteta"
          />
          <h2>
            Ro<span className={montserrat.className}>đ</span>enje deteta
          </h2>
        </Link>
        <Link href="/usluge/korporativni-dogadjaj">
          <img
            src="/svgs/cocktail.svg"
            alt="korporativni-dogadjaj"
            title="korporativni-dogadjaj"
          />
          <h2>
            Korporativni Doga<span className={montserrat.className}>đ</span>aj
          </h2>
        </Link>
        <Link href="/usluge/tinejdzerska-proslava">
          <img
            src="/svgs/teen.svg"
            alt="tinejdzerska-zurka"
            title="tinejdzerska-zurka"
          />
          <h2>
            Tinejdzerska <span className={montserrat.className}>ž</span>urka
          </h2>
        </Link>
      </div>
    </>
  );
}
