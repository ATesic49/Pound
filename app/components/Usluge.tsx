import { Aoboshi_One, Montserrat, Nunito } from "@next/font/google";
import React from "react";
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
export default function Usluge() {
  return (
    <div id="usluge-poc" className={aboshione.className}>
      <div className="h1">
        <h1>
          Sve <span className={montserrat.className}>š</span>to ti treba na
          jednom mestu
        </h1>
      </div>
      <div className="ispod">
        <h2>
          Proslave 18 Ro<span className={montserrat.className}>đ</span>endana{" "}
          <span className="span">!</span>
        </h2>
        <div className="p">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae ab
            debitis, perferendis fuga sapiente hic veritatis inventore cum animi
            vero! Cupiditate magni sint ullam provident.
          </p>
        </div>
        <div className="swiper">
          <div className="holder">
            <img src="/party.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="ispod">
        <h2>
          Proslave 18 Ro<span className={montserrat.className}>đ</span>endana{" "}
          <span className="span">!</span>
        </h2>
        <div className="p">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae ab
            debitis, perferendis fuga sapiente hic veritatis inventore cum animi
            vero! Cupiditate magni sint ullam provident.
          </p>
        </div>
        <div className="swiper">
          <div className="holder">
            <img src="/party.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="ispod">
        <h2>
          Proslave 18 Ro<span className={montserrat.className}>đ</span>endana{" "}
          <span className="span">!</span>
        </h2>
        <div className="p">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae ab
            debitis, perferendis fuga sapiente hic veritatis inventore cum animi
            vero! Cupiditate magni sint ullam provident.
          </p>
        </div>
        <div className="swiper">
          <div className="holder">
            <img src="/party.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="ispod">
        <h2>
          Korporativna okupljanja
          <span className="span">!</span>
        </h2>
        <div className="p">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae ab
            debitis, perferendis fuga sapiente hic veritatis inventore cum animi
            vero! Cupiditate magni sint ullam provident.
          </p>
        </div>
        <div className="swiper">
          <div className="holder">
            <img src="/korporativna.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
