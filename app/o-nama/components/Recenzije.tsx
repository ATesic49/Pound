import React from "react";
import { Aoboshi_One, Montserrat, Nunito, Cairo } from "next/font/google";
import Link from "next/link";
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
export default function Recenzije() {
  return (
    <div id="recenzije">
      <div className="h1">
        <h1>Recenzije</h1>
      </div>
      <div className="ispod">
        <div className="recenzija">
          <p>Nezaboravan provod, fina atmosvera, a i DJ je bio odlican.</p>
          <h2>Stojanović Andrea</h2>
        </div>
        <div className="recenzija">
          <p>
            Jako fin klub.Lepo sam se proveo, moj drug je proslavio svoj 25
            rodjendan tamo. Predložio bi ih za proslave.
          </p>
          <h2>Savić Lazar</h2>
        </div>
        <div className="recenzija">
          <p>
            Jako dobar prostor, koliko god ljudi da ima nije guzva, ozvučenje je
            jako moćno.
          </p>
          <h2>Bojić Filip</h2>
        </div>
        <div className="recenzija">
          <p>
            Slavila sam 18. rodjendan ovde, ambijent je bio zaista dobar, sa
            vlasnikom sam se jako lako dogovorila.Ketering je bio fenomenalan.
          </p>
          <h2>Marković Masa</h2>
        </div>
        <div className="recenzija">
          <p>
            Kao organizator poslonog dogadjaja, mogu da kažem da sam
            prezadovoljan uslugama koje pruža klub pound.
          </p>
          <h2>Novaković Aleksa</h2>
        </div>
        <div className="recenzija">
          <p>
            U ovom klubu jednostavno je sve na svom mestu.Izbor pića je odličan,
            hrana izvanredna.Mogao bih da kažem da je dobar provod drugo ime
            kluba.
          </p>
          <h2>Otašević Mihailo</h2>
        </div>
        <div className="recenzija">
          <p>Nezaboravan provod, odlican DJ.</p>
          <h2>Luka Andzić</h2>
        </div>
      </div>
    </div>
  );
}
