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
        alt=""
        onClick={() => {
          if (klasav === "") SetKlasav("on");
          else SetKlasav("");
        }}
      />
      <div className={`viberr ${klasav}`}>
        <Link href="viber://contact?number=%2B+381644737375">0644737375</Link>
        <Link href="viber://contact?number=%2B+381644737375">0644737376</Link>
      </div>
      <img
        src="/svgs/wa.svg"
        alt=""
        onClick={() => {
          if (klasaw === "") SetKlasaw("on");
          else SetKlasaw("");
        }}
      />
      <div className={`whatsapp ${klasaw}`}>
        <Link href="https://wa.me/+381644737375">0644737375</Link>
        <Link href="https://wa.me/+381644737375">0644737375</Link>
      </div>
    </div>
  );
}
