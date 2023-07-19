import React from "react";
import { Aoboshi_One, Nunito, Montserrat } from "@next/font/google";
import "../../../public/css/punoletstvo.css";
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
export default function Godisnjica() {
  return (
    <div id="godisnjica" className={`${aboshione.className} slidingItem`}>
      <div className="h1">
        <h1>
          Proslava godi<span className={montserrat.className}>š</span>njice
        </h1>
      </div>
      <div className="ispod">
        <div className="p">
          <p>
            Vratite se u vreme se<span className={montserrat.className}>ć</span>
            anja na neverovatnu godi
            <span className={montserrat.className}>š</span>njicu mature! Obe
            <span className={montserrat.className}>ć</span>avamo Vam prostor
            koji <span className={montserrat.className}>ć</span>e Vam pru
            <span className={montserrat.className}>ž</span>iti dovoljno mesta za
            ponovno okupljanje s dragim prijateljima. U
            <span className={montserrat.className}>ž</span>ivajte u opu
            <span className={montserrat.className}>š</span>tenoj atmosferi,
            smehu i prise
            <span className={montserrat.className}>ć</span>anju na zajedni
            <span className={montserrat.className}>č</span>ke trenutke. Neka Va
            <span className={montserrat.className}>š</span>a godi
            <span className={montserrat.className}>š</span>njica bude
            nezaboravno iskustvo koje
            <span className={montserrat.className}>ć</span>e Vam obnoviti veze i
            stvoriti nove uspomene.
          </p>
        </div>
        <div className="img">
          <img src="/reunion.svg" alt="" />
        </div>
      </div>
      <div className="kartice">
        <div className="karta">
          <div className="h2">
            <h2>Mali pound</h2>
          </div>
          <div className="deo">
            <img src="/svgs/check.svg" alt="" />
            <div className="p">Barmen</div>
          </div>
          <div className="deo">
            <img src="/svgs/check.svg" alt="" />
            <div className="p">Profesionalni dj</div>
          </div>
          <div className="deo">
            <img src="/svgs/check.svg" alt="" />
            <div className="p">Unajmljeno obezbedjenje</div>
          </div>
          <div className="deo">
            <img src="/svgs/cross.svg" alt="" />
            <div className="p">
              Neograni<span className={montserrat.className}>č</span>en broj pi
              <span className={montserrat.className}>ć</span>a
            </div>
          </div>
          <img src="/svgs/dj.svg" alt="" />
          <div className="cena">400e</div>
        </div>
        <div className="karta">
          <div className="h2">
            <h2>Mali pound</h2>
          </div>
          <div className="deo">
            <img src="/svgs/check.svg" alt="" />
            <div className="p">Barmen</div>
          </div>
          <div className="deo">
            <img src="/svgs/check.svg" alt="" />
            <div className="p">Profesionalni dj</div>
          </div>
          <div className="deo">
            <img src="/svgs/check.svg" alt="" />
            <div className="p">Unajmljeno obezbedjenje</div>
          </div>
          <div className="deo">
            <img src="/svgs/check.svg" alt="" />
            <div className="p">
              Neograni<span className={montserrat.className}>č</span>en broj pi
              <span className={montserrat.className}>ć</span>a
            </div>
          </div>
          <img src="/svgs/dj.svg" alt="" />
          <div className="cena">600e</div>
        </div>
      </div>
    </div>
  );
}
