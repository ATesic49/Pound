import Image from "next/image";
import Pocetna from "./components/Pocetna";
import Kontakt from "./components/Kontakt";
import Navbar from "./components/Navbar";
import { Aoboshi_One, Montserrat, Nunito, Cairo } from "@next/font/google";
import React from "react";
import Uslugee from "./components/Uslugee";
// import Onama from "./components/Onama";
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
export default function Home() {
  return (
    <main>
      <Navbar ok={"da"} />
      <Pocetna />
      <Uslugee h2={true} />
      {/* <Onama /> */}
      {/* <Usluge /> */}
      {/* <Cena /> */}
      <Kontakt h2={true} />
    </main>
  );
}
