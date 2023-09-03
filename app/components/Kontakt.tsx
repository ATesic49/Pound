import React from "react";
import EmailSender from "./EmailSender";
import Link from "next/link";


export default function Kontakt({ h2 }: { h2: boolean }) {
  return (
    <div id="kontakt-poc" >
      <div className="h1">{h2 ? <h2>Kontakt</h2> : <h1>Kontakt</h1>}</div>
      <div className={`p `}>
        <p>
          Za sve informacije i dogovore oko iznajmljivanja našeg prostora,
          slobodno nam se obratite na brojeve:
          <br />
          <br />
          <Link href="tel:064650475">064650475</Link>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <Link href="tel:064593847">064593847</Link>
          <br />
          <br />
          Pošaljite nam e-mail na: <br />
          <br />
          <Link href="mailto:klubpound@gmail.com">klubpound@gmail.com</Link>
          <br />
          <br />
          Naša ekipa je ovde da vam pomogne i odgovori na sva pitanja koja
          imate. Radujemo se uspostavljanju kontakta s vama i ugovaranju
          nezaboravne žurke!
        </p>
      </div>
      <EmailSender />
      <div id="pozovi" >
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
            <Link href="tel:064650475">064-650-475</Link>
            <div className="outline"></div>
          </div>

          <div className="tel">
            <Link href="tel:064593847">064-593-847</Link>
            <div className="outline"></div>
          </div>
        </div>
      </div>
      <div id="lokacija" >
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
