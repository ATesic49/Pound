import React from "react";
import EmailSender from "./EmailSender";
import Link from "next/link";

export default function Footer() {
  return (
    <div  id="footer">
      <p>Made by WebWolfAgency © {new Date().getFullYear()} </p>
      {/* <Link href="viber://contact?number=%2B+381644737375">
        <img src="/svgs/viber.svg" alt="" />
      </Link>
      <Link href="https://wa.me/+381644737375" className="wa">
        <img src="/svgs/whatsapp.svg" alt="" />
      </Link> */}
    </div>
  );
}
