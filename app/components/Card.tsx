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
export default function Card() {
  return (
    <div className="kartica">
      <div className="h2">
        <h2>Radnim danima</h2>
      </div>
      <div className="vreme">
        <p>
          18-02 <span>h</span>{" "}
        </p>
      </div>
      <div className="cena">
        <span>200 $</span>
      </div>
      <div className="dugme">
        <div className={montserrat.className}>
          <div className="link">
            Kontakt
            <Link href="/kontakt">Kontakt</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
