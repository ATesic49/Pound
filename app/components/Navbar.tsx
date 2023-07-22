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
      <div id="navbar" className={`${cairo.className} spusten`}>
        <Link href="/">
          <img src="/logo.svg" alt="logo" className="logo" />
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
              {/* <span
              onClick={(e) => {
                e.preventDefault();
                if (usluge === "nema") SetUsluge("ima");
                else SetUsluge("nema");
              }}
            >
              {" "}
              &#8248;
            </span> */}
              <div className={`padajuci ${usluge}`}>
                <ul>
                  <li>
                    <Link href="/usluge">Proslave 18. rodjendana</Link>
                  </li>
                </ul>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/dodatne-usluge">
              Dodatne Usluge{" "}
              <img
                src="/svgs/down.svg"
                alt="D"
                onClick={(e) => {
                  if (dusluge === "nema") SetDUsluge("ima");
                  else SetDUsluge("nema");
                }}
              />
            </Link>
          </li>
          <li>
            <Link href="/karta-pica">Karta pića</Link>
          </li>
          <li>
            <Link href="/o-nama">Kontakt</Link>
          </li>
        </ul>
        <div className="navmobilebutton">
          <img src="/options.svg" alt="dasdsd" />
        </div>
      </div>
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
