import Image from "next/image";
import Onama from "./components/Onama";
import Pocetna from "./components/Pocetna";
import Usluge from "./components/Usluge";
// import Cena from "./components/Cena";
import Kontakt from "./components/Kontakt";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Swiperr from "./usluge/components/Swiper";
import Link from "next/link";
import { Aoboshi_One, Montserrat, Nunito, Cairo } from "@next/font/google";
import React from "react";
import Toast from "./components/Toast";
import Uslugee from "./components/Uslugee";
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
      <Uslugee />
      <Onama />
      {/* <Usluge /> */}
      {/* <Cena /> */}
      <Kontakt />
    </main>
  );
}
