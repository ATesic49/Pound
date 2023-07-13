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
export default function Footer() {
  return (
    <div className={montserrat.className} id="footer">
      <p>Made by WebWolfAgency © {new Date().getFullYear()} </p>
      <Link href="viber://contact?number=%2B+381644737375">
        <img src="/svgs/viber.svg" alt="" />
      </Link>
      <Link href="https://wa.me/+381644737375" className="wa">
        <img src="/svgs/whatsapp.svg" alt="" />
      </Link>
    </div>
  );
}
