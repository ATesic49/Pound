"use client";
import { Cairo } from "@next/font/google";
import Link from "next/link";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});
export default function PocetnaButton() {
  return (
    <div id="pocetnaButton" className={cairo.className}>
      <p>
        {" "}
        <Link href="/kontakt">Kontakt</Link>{" "}
      </p>
    </div>
  );
}
