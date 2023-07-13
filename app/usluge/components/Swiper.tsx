import { Aoboshi_One, Montserrat, Nunito, Cairo } from "next/font/google";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

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
    <div id="swiper" className={aboshione.className}>
      <div className="h1">
        <h1>Dodatne Usluge</h1>
      </div>
      <div className="ispod">
        <div className="karta">
          <img src="/svgs/dj.svg" alt="" />
          <h2>Iznajmljivanje Dj-a</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            voluptatem est ratione tenetur ullam porro autem aspernatur cumque
            numquam distinctio?
          </p>
          <Link href="/cena" className={aboshione.className}>
            Pogledaj Cenu
          </Link>
        </div>

        <div className="karta">
          <img src="/svgs/ketering.svg" alt="" />
          <h2>Ketering</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            voluptatem est ratione tenetur ullam porro autem aspernatur cumque
            numquam distinctio?
          </p>
          <Link href="/cena" className={aboshione.className}>
            Pogledaj Cenu
          </Link>
        </div>
        <div className="karta">
          <img src="/svgs/barmen.svg" alt="" />
          <h2>Iznajmnjivanje Barmena</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            voluptatem est ratione tenetur ullam porro autem aspernatur cumque
            numquam distinctio?
          </p>

          <Link href="/cena" className={aboshione.className}>
            Pogledaj Cenu
          </Link>
        </div>
      </div>
    </div>
  );
}
