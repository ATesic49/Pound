"use client";
import Link from "next/link";
import { Cairo } from "next/font/google";
import { useEffect, useState } from "react";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export default function Navbar() {
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

  return (
    <>
      <div id="navbar" className={`${cairo.className} ${stanjeNava}`}>
        <Link href="/">
          <img src="/logo.svg" alt="logo" className="logo" />
        </Link>
        <ul className="flex pc">
          <li>
            <Link href="/o-nama">O nama</Link>
          </li>
          <li>
            <Link href="/o-nama">Slike</Link>
          </li>
          <li>
            <Link href="/o-nama">Usluge</Link>
          </li>

          <li>
            <Link href="/o-nama">Cena</Link>
          </li>
          <li>
            <Link href="/o-nama">Kontakt</Link>
          </li>
        </ul>
        <div className="navmobilebutton">
          <img src="/options.svg" alt="" />
        </div>
        <ul className="mobile">
          <li>
            <Link href="">Početna</Link>
          </li>
          <li>
            <Link href="/o-nama">O nama</Link>
          </li>
          <li>
            <Link href="/o-nama">Usluge</Link>
          </li>
          <li>
            <Link href="/o-nama">Ostale usluge</Link>
          </li>
          <li>
            <Link href="/o-nama">Kontakt</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
