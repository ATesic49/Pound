"use client";
import { Aoboshi_One, Montserrat, Nunito, Cairo } from "@next/font/google";
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
          <img src="/svgs/pice.svg" alt="" />
          <h2>Karta Pića</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            voluptatem est ratione tenetur ullam porro autem aspernatur cumque
            numquam distinctio?
          </p>

          <Link href="/karta-pica" className={aboshione.className}>
            Detaljnije
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
          <Link href="/dodatne-usluge/ketering" className={aboshione.className}>
            Detaljnije
          </Link>
        </div>
        <div className="karta">
          <img src="/svgs/muzika.svg" alt="" />
          <h2>Muzika</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            voluptatem est ratione tenetur ullam porro autem aspernatur cumque
            numquam distinctio?
          </p>
          <Link href="/dodatne-usluge/muzika" className={aboshione.className}>
            Detaljnije
          </Link>
        </div>
        <div className="karta">
          <img src="/svgs/foto.svg" alt="" />
          <h2>Profesionalni Fotograf</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            voluptatem est ratione tenetur ullam porro autem aspernatur cumque
            numquam distinctio?
          </p>
          <Link href="/dodatne-usluge/fotograf" className={aboshione.className}>
            Detaljnije
          </Link>
        </div>

        <div className="karta">
          <img src="/svgs/dekoracija.svg" alt="" />
          <h2>Dekoracija</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            voluptatem est ratione tenetur ullam porro autem aspernatur cumque
            numquam distinctio?
          </p>
          <Link
            href="/dodatne-usluge/dekoracija"
            className={aboshione.className}
          >
            Detaljnije
          </Link>
        </div>
      </div>
    </div>
  );
}
