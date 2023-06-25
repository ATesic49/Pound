"use client";
import { Lobster } from "next/font/google";
import { Fugaz_One } from "next/font/google";
import Onama from "./Onama";
import PocetnaButton from "./PocetnaButton";
const lobster = Lobster({
  subsets: ["latin"],
  weight: ["400"],
});
const fugazOne = Fugaz_One({
  subsets: ["latin"],
  weight: ["400"],
});
export default function Pocetna() {
  return (
    <div id="pocetna" className={lobster.className}>
      <img src="/pocetna.jpeg" className="img" />
      <p className="natpis">Iznajmljivanje kluba</p>
      <p className={`${fugazOne.className} pound`}>P O U N D </p>
      <PocetnaButton />
    </div>
  );
}
