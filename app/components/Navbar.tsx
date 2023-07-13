"use client";
import Link from "next/link";
import { Cairo } from "next/font/google";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const cairo = Cairo({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export default function Navbar({ ok }: { ok: string }) {
  const [stanjeNava, SetStanjeNava] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", function o() {
      const { scrollY } = window;
      if (scrollY === 0) {
        return SetStanjeNava("dignut");
      } else SetStanjeNava("spusten");
      return () => {
        window.removeEventListener("scroll", o);
      };
    });
  });
  useEffect(() => {
    const { scrollY } = window;
    if (scrollY === 0) {
      return SetStanjeNava("dignut");
    } else SetStanjeNava("spusten");
  }, []);

  const [mobile, SetMobile] = useState("");
  const [overlay, SetOverlay] = useState("svetao");
  return (
    <>
      <ul className={`mobile ${mobile}`}>
        <li>
          <Link href="">Početna</Link>
        </li>
        <li>
          <Link href="/o-nama">O nama</Link>
        </li>
        <li>
          <Link href="/usluge">Usluge</Link>
        </li>
        <li>
          <Link href="/o-nama">Ostale usluge</Link>
        </li>
        <li>
          <Link href="/o-nama">Kontakt</Link>
        </li>
      </ul>
      {ok === "da" ? (
        <div id="navbar" className={`${cairo.className} ${stanjeNava}`}>
          <Link href="/">
            <img src="/logo.svg" alt="logo" className="logo" />
          </Link>
          <ul className="flex pc">
            <li>
              <Link href="/o-nama">O nama</Link>
            </li>
            <li>
              <Link href="/usluge">Usluge</Link>
            </li>

            <li>
              <Link href="/o-nama">Cena</Link>
            </li>
            <li>
              <Link href="/o-nama">Kontakt</Link>
            </li>
          </ul>
          <div className="navmobilebutton">
            <img
              src="/options.svg"
              alt="dasdsd"
              onClick={() => {
                if (mobile === "oce") SetMobile("nece");
                else SetMobile("oce");
                if (overlay === "svetao") SetOverlay("taman");
                else SetOverlay("svetao");
              }}
            />
          </div>
        </div>
      ) : (
        <div id="navbar" className={`${cairo.className} spusten`}>
          <Link href="/">
            <img src="/logo.svg" alt="logo" className="logo" />
          </Link>
          <ul className="flex pc">
            <li>
              <Link href="/o-nama">O nama</Link>
            </li>
            <li>
              <Link href="/usluge">Usluge</Link>
            </li>

            <li>
              <Link href="/o-nama">Cena</Link>
            </li>
            <li>
              <Link href="/o-nama">Kontakt</Link>
            </li>
          </ul>
          <div className="navmobilebutton">
            <img
              src="/options.svg"
              alt="dasdsd"
              onClick={() => {
                if (mobile === "oce") SetMobile("nece");
                else SetMobile("oce");
                if (overlay === "svetao") SetOverlay("taman");
                else SetOverlay("svetao");
              }}
            />
          </div>
        </div>
      )}

      <div
        id="overlay"
        className={overlay}
        onClick={() => {
          SetMobile("nece");
          SetOverlay("svetao");
        }}
      ></div>
    </>
  );
}
