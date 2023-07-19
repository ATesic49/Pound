"use client";
import { Cairo } from "@next/font/google";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});
export default function PocetnaButton() {
  return (
    <div id="pocetnaButton" className={cairo.className}>
      <p> Kontakt </p>
    </div>
  );
}
