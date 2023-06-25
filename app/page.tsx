import Image from "next/image";
import Onama from "./components/Onama";
import Pocetna from "./components/Pocetna";
import Usluge from "./components/Usluge";

export default function Home() {
  return (
    <main>
      <Pocetna />
      <Onama />
      <Usluge />
    </main>
  );
}
