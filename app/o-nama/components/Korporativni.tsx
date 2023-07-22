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
export default function Korporativni() {
  return (
    <div id="godisnjica" className={`${aboshione.className} slidingItem`}>
      <div className="h1">
        <h1>Korporativni dogadjaj</h1>
      </div>
      <div className="ispod">
        <div className="p">
          <p>
            Proslavite postignu<span className={montserrat.className}>ć</span>a
            i uspehe va<span className={montserrat.className}>š</span>eg tima u
            na<span className={montserrat.className}>š</span>im kancelarijskim
            proslavama! Na<span className={montserrat.className}>š</span>
            prostor pru<span className={montserrat.className}>ž</span>a idealno
            okru<span className={montserrat.className}>ž</span>enje za opu
            <span className={montserrat.className}>š</span>tanje i slavlje s
            kolegama. Uz posebno pripremljene obroke i osve
            <span className={montserrat.className}>ž</span>avajuće napitke, mo
            <span className={montserrat.className}>ž</span>ete u
            <span className={montserrat.className}>ž</span>ivati u neformalnoj i
            ugodnoj atmosferi. Uz na
            <span className={montserrat.className}>š</span>u stru
            <span className={montserrat.className}>č</span>nu ekipu, va
            <span className={montserrat.className}>š</span>a kancelarijska
            proslava bit će nezaboravna i potaknut će timski duh.
          </p>
        </div>
        <div className="img">
          {/* <img src="/korporativna.svg" alt="" /> */}
        </div>
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
