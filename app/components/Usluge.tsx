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
          Proslava 18-og Ro<span className={montserrat.className}>đ</span>endana{" "}
          <span className="span">!</span>
        </h2>
        <div className="p">
          <p>
            Osetite svoj 18. ro<span className={montserrat.className}>đ</span>
            endan uz neverovatnu zabavu i prostrani prostor! Pru
            <span className={montserrat.className}>ž</span>amo vam nezaboravnu
            no<span className={montserrat.className}>ć</span> s prijateljima, uz
            mno<span className={montserrat.className}>š</span>tvo neverovatne
            zabave. U<span className={montserrat.className}>ž</span>ivajte u
            neponovljivom iskustvu za Va
            <span className={montserrat.className}>š</span> poseban dan, dok mi
            brinemo o svim detaljima.
          </p>
        </div>
        <div className="swiper">
          {/* <div className="holder"><img src="/party.svg" alt="" /></div> */}
        </div>
        <div className={`dugme ${cairo.className}`}>
          <Link href="/usluge" className="link">
            Detaljnije
          </Link>
        </div>
      </div>
      <div className="ispod">
        <h2>
          Proslava godi<span className={montserrat.className}>š</span>njice
          <span className="span">!</span>
        </h2>
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
        <div className="swiper">
          {/* <div className="holder"> */}
          {/* <img src="/reunion.svg" alt="" /> */}
          {/* </div> */}
        </div>
        <div className={`dugme ${cairo.className}`}>
          <Link href="/usluge" className="link">
            Detaljnije
          </Link>
        </div>
      </div>
      <div className="ispod">
        <h2>
          Ro<span className={montserrat.className}>đ</span>enje deteta
          <span className="span">!</span>
        </h2>
        <div className="p">
          <p>
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
        <div className="swiper">
          {/* <div className="holder"> */}
          {/* <img src="/beba.svg" alt="" /> */}
          {/* </div> */}
        </div>
        <div className={`dugme ${cairo.className}`}>
          <Link href="/usluge" className="link">
            Detaljnije
          </Link>
        </div>
      </div>
      {/* <div className="ispod">
        <h2>
          Koktel ve<span className={montserrat.className}>č</span>e
          <span className="span">!</span>
        </h2>
        <div className="p">
          <p>
            U<span className={montserrat.className}>ž</span>ivajte u
            sofisticiranoj atmosferi na na
            <span className={montserrat.className}>š</span>im koktel partijima!
            Otvorite svoja <span className={montserrat.className}>č</span>ula uz
            egzoti<span className={montserrat.className}>č</span>ne i kreativne
            koktele, dok u pozadini svira uzbudljiva muzika. Prepustite se
            jedinstvenom iskustvu dru
            <span className={montserrat.className}>ž</span>enja s prijateljima
            ili kolegama, dok na<span className={montserrat.className}>š</span>a
            profesionalna ekipa brine o svakom detalju. Uz na<span className={montserrat.className}>š</span>u{" "}
            <span className={montserrat.className}>š</span>iroku ponudu pi
            <span className={montserrat.className}>ć</span>a i izvrsnu uslugu,
            va<span className={montserrat.className}>š</span>a koktel zabava{" "}
            <span className={montserrat.className}>ć</span>e biti nezaboravna..
          </p>
        </div>
        <div className="swiper">
          <div className="holder">
            <img src="/koktel.svg" alt="" />
          </div>
        </div>
        <div className={`dugme ${cairo.className}`}>
          <Link href="/usluge" className="link">
            Detaljnije
          </Link>
        </div>
      </div> */}
      <div className="ispod">
        <h2>
          Korporativni Dogadjaji
          <span className="span">!</span>
        </h2>
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
        <div className="swiper">
          {/* <div className="holder"> */}
          {/* <img src="/korporativna.svg" alt="" /> */}
          {/* </div> */}
        </div>
        <div className={`dugme ${cairo.className}`}>
          <Link href="/usluge" className="link">
            Detaljnije
          </Link>
        </div>
      </div>
    </div>
  );
}
