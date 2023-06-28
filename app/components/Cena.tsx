

import { Aoboshi_One, Montserrat, Nunito, Cairo } from "@next/font/google";
import Link from "next/link";
import React from "react";
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
export default function cena() {
  return (
    <div id="cena-poc" className={aboshione.className}>
<h1>Pound, tvoja valuta</h1> 
    </div>
  )
}
