"use client";
import { Aoboshi_One, Montserrat, Nunito, Cairo } from "@next/font/google";
import React from "react";
import Navbar from "../components/Navbar";

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
export default function Swiperr() {
  return (
    <>
      <Navbar ok="ne" />;
      <div id="karta" className={montserrat.className}>
        <div className="h1">
          <h1>Karta Pića</h1>
          <p className="podnaslov">
            Cena pi<span className={montserrat.className}>ć</span>a po osobi iz
            odabranog paketa (normal, standard , premium) podrazumeva neograni
            <span className={montserrat.className}>č</span>enu konzumaciju pi
            <span className={montserrat.className}>ć</span>a iz ponude paketa
            tokom cele proslave rodjendana.
          </p>
          <p className="podnaslov">
            U paketu pi<span className={montserrat.className}>ć</span>a za de
            <span className={montserrat.className}>č</span>iji rodjendan (child)
            se nalaze isklju<span className={montserrat.className}>č</span>ivo
            bezalkoholna pića.
          </p>
        </div>
        <div className="ispod">
          <div className="karta">
            <h2>Normal</h2>
            <h3 id="cena">
              <span>
                3.5<span>&#8364;</span>
              </span>{" "}
              po osobi
            </h3>
            <ul>
              <li>
                <span>&#10003;</span> Beer (Zaje
                <span className={montserrat.className}>č</span>arsko/Jelen/Lav)
              </li>
              <li>
                <span>&#10003;</span> White wine
              </li>
              <li>
                <span>&#10003;</span> Black wine
              </li>
              <li>
                <span>&#10003;</span> Rakija
              </li>
              <li>
                <span>&#10003;</span> Vodka
              </li>
              <li>
                <span>&#10003;</span> Blueberry & Orange
              </li>
              <li>
                <span>&#10003;</span> Sprite
              </li>
              <li>
                <span>&#10003;</span> Coca Cola
              </li>
              <li className="ne-pripada">
                <span>&#10007;</span> Schweppes Tonic
              </li>
              <li className="ne-pripada">
                <span>&#10007;</span> Gin
              </li>
              <li className="ne-pripada">
                <span>&#10007;</span> Vermouth
              </li>
              <li className="ne-pripada">
                <span>&#10007;</span> Vinjak
              </li>
              <li className="ne-pripada">
                <span>&#10007;</span> Tequila
              </li>
              <li className="ne-pripada">
                <span>&#10007;</span> Whiskey (Label 5, Ballantines)
              </li>
              <li className="ne-pripada">
                <span>&#10007;</span> Cocktails
              </li>
            </ul>
          </div>
          <div className="karta">
            <h2>Standard</h2>
            <h3 id="cena">
              <span>
                4.5<span>&#8364;</span>
              </span>{" "}
              po osobi
            </h3>
            <ul>
              <li>
                <span>&#10003;</span> Beer (Zaječarsko/Jelen/Lav)
              </li>
              <li>
                <span>&#10003;</span> White wine
              </li>
              <li>
                <span>&#10003;</span> Black wine
              </li>
              <li>
                <span>&#10003;</span> Rakija
              </li>
              <li>
                <span>&#10003;</span> Vodka
              </li>
              <li>
                <span>&#10003;</span> Blueberry & Orange
              </li>
              <li>
                <span>&#10003;</span> Sprite
              </li>
              <li>
                <span>&#10003;</span> Coca Cola
              </li>
              <li>
                <span>&#10003;</span> Schweppes Tonic
              </li>
              <li>
                <span>&#10003;</span> Gin
              </li>
              <li>
                <span>&#10003;</span> Vermouth
              </li>
              <li>
                <span>&#10003;</span> Vinjak
              </li>
              <li className="ne-pripada">
                <span>&#10007;</span> Tequila
              </li>
              <li className="ne-pripada">
                <span>&#10007;</span> Whiskey (Label 5, Ballantines)
              </li>
              <li className="ne-pripada">
                <span>&#10007;</span> Cocktails
              </li>
            </ul>
          </div>
          <div className="karta">
            <h2>Premium</h2>
            <h3 id="cena">
              <span>
                5.5<span>&#8364;</span>
              </span>{" "}
              po osobi
            </h3>
            <ul>
              <li>
                <span>&#10003;</span> Beer (Zaječarsko/Jelen/Lav)
              </li>
              <li>
                <span>&#10003;</span> White wine
              </li>
              <li>
                <span>&#10003;</span> Black wine
              </li>
              <li>
                <span>&#10003;</span> Rakija
              </li>
              <li>
                <span>&#10003;</span> Vodka
              </li>
              <li>
                <span>&#10003;</span> Blueberry & Orange
              </li>
              <li>
                <span>&#10003;</span> Sprite
              </li>
              <li>
                <span>&#10003;</span> Coca Cola
              </li>
              <li>
                <span>&#10003;</span> Schweppes Tonic
              </li>
              <li>
                <span>&#10003;</span> Gin
              </li>
              <li>
                <span>&#10003;</span> Vermouth
              </li>
              <li>
                <span>&#10003;</span> Vinjak
              </li>
              <li>
                <span>&#10003;</span> Tequila
              </li>
              <li>
                <span>&#10003;</span> Whiskey (Label 5, Ballantines)
              </li>
              <li>
                <span>&#10003;</span> Cocktails
              </li>
            </ul>
          </div>
          <div className="karta" id="deca">
            <h2>Child</h2>
            <h3 id="cena">
              <span>
                2<span>&#8364;</span>
              </span>{" "}
              po osobi
            </h3>
            <ul>
              <li>
                <span>&#10003;</span> Coca-Cola
              </li>
              <li>
                <span>&#10003;</span> Fanta
              </li>
              <li>
                <span>&#10003;</span> Sprite
              </li>
              <li>
                <span>&#10003;</span> Bluebarry
              </li>
              <li>
                <span>&#10003;</span> Orange
              </li>
              <li>
                <span>&#10003;</span> Forest fruits
              </li>
              <li>
                <span>&#10003;</span> Peach
              </li>
              <li>
                <span>&#10003;</span> Apple
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
