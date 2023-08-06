"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function VIber() {
  const [klasaw, SetKlasaw] = useState("");
  const [klasav, SetKlasav] = useState("");

  return (
    <div id="viber">
      <img
        src="/svgs/viberr.svg"
        alt="viber"
        title="viber"
        onClick={() => {
          if (klasav === "") SetKlasav("on");
          else SetKlasav("");
        }}
      />
      <div className={`viberr ${klasav}`}>
        <Link href="viber://contact?number=%2B38164650475">064650475</Link>
        <Link href="viber://contact?number=%2B38164593847">064593847</Link>
      </div>
      <img
        id="wa"
        src="/svgs/wa.svg"
        alt="whatsapp"
        title="whatsapp"
        onClick={() => {
          if (klasaw === "") SetKlasaw("on");
          else SetKlasaw("");
        }}
      />
      <div className={`whatsapp ${klasaw}`}>
        <Link href="https://wa.me/38164650475">064650475</Link>
        <Link href="https://wa.me/38164593847">064593847</Link>
      </div>
    </div>
  );
}
