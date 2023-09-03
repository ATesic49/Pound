import Image from "next/image";
import Pocetna from "./components/Pocetna";
import Kontakt from "./components/Kontakt";
import Navbar from "./components/Navbar";
import React from "react";
import Uslugee from "./components/Uslugee";
// import Onama from "./components/Onama";
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
