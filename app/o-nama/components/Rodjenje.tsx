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
export default function Rodjenje() {
  return (
    <div id="godisnjica" className={`aboshione slidingItem`}>
      <div className="h1">
        <h1>Rodjenje deteta</h1>
      </div>
      <div className="ispod">
        <div className="p">
          <p className={montserrat.className}>
            Dobrodo<span className={montserrat.className}>š</span>li u na
            <span className={montserrat.className}>š</span> klub koji vam nudi
            prostor za proslavu ro
            <span className={montserrat.className}>đ</span>enja va
            <span className={montserrat.className}>š</span>eg deteta! Pru
            <span className={montserrat.className}>ž</span>amo vam mogućnost da
            zajedno s porodicom i prijateljima proslavite dolazak prinove. U
            <span className={montserrat.className}>ž</span>
            ivajte u intimnoj i toploj atmosferi, dok delite radost i sre
            <span className={montserrat.className}>ć</span>ne trenutke s
            voljenima. Neka va<span className={montserrat.className}>š</span>a
            proslava ro<span className={montserrat.className}>đ</span>enja bude
            nezaboravna i ispunjena ljubavlju.
          </p>
        </div>
        <div className="img">{/* <img src="/beba.svg" alt="" /> */}</div>
      </div>
      {/* <div className="kartice">
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
      </div> */}
      <div className="dole">
        <div className="levo">
          {/* <h1>350€ </h1> <span>/noć</span> */}
          <img src="/svgs/handshake.svg" alt="" />
          <h2>Cena po dogovoru</h2>
        </div>
        <div className="desno">
          <h2>U cenu ulazi</h2>
          <div className="deo">
            <img src="/svgs/check.svg" />
            <p>Barmen</p>
          </div>
          <div className="deo">
            <img src="/svgs/check.svg" />
            <p>Profesionalni Dj</p>
          </div>
          <div className="deo">
            <img src="/svgs/check.svg" />
            <p>Obezbedjenje</p>
          </div>
        </div>
      </div>
    </div>
  );
}
