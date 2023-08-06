"use client";
import Link from "next/link";
import { Cairo } from "@next/font/google";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
const cairo = Cairo({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export default function Navbar({ ok }: { ok: string }) {
  const [usluge, SetUsluge] = useState("nema");
  const [dusluge, SetDUsluge] = useState("nema");
  const [isClient, SetIsClient] = useState(false);
  useEffect(() => {
    SetIsClient(true);
  }, []);
  return (
    <>
      {isClient ? (
        <div id="navbar" className={`${cairo.className} spusten`}>
          <Link href="/">
            <img src="/logo.svg" alt="logo" title="logo" className="logo" />
          </Link>
          <ul className="flex pc">
            <li>
              <Link href="/o-nama">O nama</Link>
            </li>
            <li>
              <Link
                href="/usluge"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Usluge{" "}
                <img
                  title="strelica nadole"
                  src="/svgs/down.svg"
                  alt="strelica nadole"
                  onClick={(e) => {
                    e.preventDefault();
                    if (usluge === "nema") SetUsluge("ima");
                    else SetUsluge("nema");
                  }}
                />
                <div className={`padajuci ${usluge}`}>
                  <ul>
                    <li>
                      <Link href="/usluge/punoletstvo">
                        Proslave 18. rodjendana
                      </Link>
                      <Link href="/usluge/godisnjica">Proslava Godišnjice</Link>
                      <Link href="/usluge/rodjenje-deteta">Rođenje deteta</Link>
                      <Link href="/usluge/korporativni-dogadjaj">
                        Korporativni događaj
                      </Link>
                      <Link href="/usluge/tinejdzerska-proslava">
                        Tinejdžerska proslava
                      </Link>
                    </li>
                  </ul>
                </div>
              </Link>
            </li>

            <li>
              <Link href="/karta-pica">Karta pića</Link>
            </li>
            <li>
              <Link
                href="/dodatne-usluge"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Dodatne Usluge{" "}
                <img
                  title="strelica nadole"
                  src="/svgs/down.svg"
                  alt="strelica nadole"
                  onClick={(e) => {
                    e.preventDefault();
                    if (dusluge === "nema") SetDUsluge("ima");
                    else SetDUsluge("nema");
                  }}
                />
                <div className={`padajuci ${dusluge}`}>
                  <ul>
                    <li>
                      <Link href="/dodatne-usluge/ketering">Ketering</Link>
                      <Link href="/dodatne-usluge/muzika">Muzika</Link>
                      <Link href="/dodatne-usluge/fotograf">Fotograf</Link>
                      <Link href="/dodatne-usluge/dekoracija">Dekoracija</Link>
                    </li>
                  </ul>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/kontakt">Kontakt</Link>
            </li>
          </ul>
          {/* <div className="navmobilebutton">
            <img src="/options.svg" alt="dasdsd" />
          </div> */}
        </div>
      ) : null}
    </>
    // <>
    //   <ul className={`mobile ${mobile}`}>
    //     <li>
    //       <Link href="">Početna</Link>
    //     </li>
    //     <li>
    //       <Link href="/o-nama">O nama</Link>
    //     </li>
    //     <li>
    //       <Link href="/usluge">Usluge</Link>
    //     </li>
    //     <li>
    //       <Link href="/karta-pica">Karta pića</Link>
    //     </li>
    //     <li>
    //       <Link href="/o-nama">Kontakt</Link>
    //     </li>
    //   </ul>
    //   {ok === "da" ? (
    //     <a id="navbar" className={`${cairo.className} ${stanjeNava}`}>
    //       <Link href="/">
    //         <img src="/logo.svg" alt="logo" className="logo" />
    //       </Link>
    //       <ul className="flex pc">
    //         <li>
    //           <Link href="/o-nama">O nama</Link>
    //         </li>
    //         <li>
    //           <Link href="/usluge">Usluge</Link>
    //         </li>

    //         <li>
    //           <Link href="/karta-pica">Karta pića</Link>
    //         </li>
    //         <li>
    //           <Link href="/o-nama">Kontakt</Link>
    //         </li>
    //       </ul>
    //       <div className="navmobilebutton">
    //         <img
    //           src="/options.svg"
    //           alt="dasdsd"
    //           onClick={() => {
    //             if (mobile === "oce") SetMobile("nece");
    //             else SetMobile("oce");
    //             if (overlay === "svetao") SetOverlay("taman");
    //             else SetOverlay("svetao");
    //           }}
    //         />
    //       </div>
    //     </div>
    //   ) : (

    //   )}

    //   <div
    //     id="overlay"
    //     className={overlay}
    //     onClick={() => {
    //       SetMobile("nece");
    //       SetOverlay("svetao");
    //     }}
    //   ></div>
    // </>
  );
}
