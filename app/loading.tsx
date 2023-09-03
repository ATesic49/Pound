import { Lobster } from "next/font/google";
import { Fugaz_One } from "next/font/google";
const lobster = Lobster({
  subsets: ["latin"],
  weight: ["400"],
});
const fugazOne = Fugaz_One({
  subsets: ["latin"],
  weight: ["400"],
});
export default function loading() {
  return (
    <div id="loading">
      <div id="pocetna" className={lobster.className}>
        <img src="" alt="" title="prazna slika" className="img" />
        <h1 className="natpis">Iznajmljivanje kluba</h1>
        <h1 className={`${fugazOne.className} pound`}>P O U N D </h1>
      </div>
    </div>
  );
}
