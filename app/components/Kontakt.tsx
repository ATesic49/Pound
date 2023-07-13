import React from "react";
import EmailSender from "./EmailSender";
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
export default function Kontakt() {
  return (
    <div id="kontakt-poc" className={montserrat.className}>
      <div className="h1">
        <h1>Kontakt</h1>
      </div>
      <div className={`p ${montserrat.className}`}>
        <p>
          Pozdrav! Veselimo se što ste zainteresirani za naš klub i saradnju sa
          nama. Za sve informacije i dogovore oko iznajmljivanja našeg prostora,
          slobodno nam se obratite putem telefona na broj {""}
          <Link href="tel:0644737375">0644737375</Link>, ili na {""}
          <Link href="tel:0644737375">0644737375</Link> pošaljite nam e-mail na{" "}
          <Link href="mailto:klubpound@gmail.com">klubpound@gmail.com</Link> ili
          nam jednostavno pošaljite poruku putem naše kontakt forme na web
          stranici. Naša ekipa je ovdje da vam pomogne i odgovori na sva pitanja
          koja imate. Radujemo se uspostaviti kontakt s vama i dogovoriti
          nezaboravnu saradnju!
        </p>
      </div>
      <EmailSender />
      <div id="pozovi" className={aboshione.className}>
        <div className="h2">
          <h2>
            <span> Pozovi </span> Nas
          </h2>
        </div>
        <div className="ispod">
          {/* <div className="bezveze">
              <div className="icon">
                <img src="/talking.svg" alt="" />
              </div>
              <div className="p">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Corrupti minima tenetur ratione optio exercitationem
                  obcaecati.
                </p>
              </div>
            </div> */}
          <div className="tel">
            <Link href="tel:0644737375">064-473-73-75</Link>
            <div className="outline"></div>
          </div>

          <div className="tel">
            <Link href="tel:0644737375">064-473-73-75</Link>
            <div className="outline"></div>
          </div>
        </div>
      </div>
      <div id="lokacija" className={aboshione.className}>
        <div className="h2">
          <h2>
            <span> Pronadji </span> Nas
          </h2>
        </div>
        <div className="ispod">
          <div className="maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.149677674267!2d20.466858115535246!3d44.79813817909874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a700ca7258e8f%3A0xbe11391a6fc0344c!2z0KXRgNCw0Lwg0KHQstC10YLQuCDQodCw0LLQsA!5e0!3m2!1ssr!2srs!4v1688484580008!5m2!1ssr!2srs"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
