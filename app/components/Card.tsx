import Link from "next/link";
import React from "react";

export default function Card() {
  return (
    <div className="kartica">
      <div className="h2">
        <h2>Radnim danima</h2>
      </div>
      <div className="vreme">
        <p>
          18-02 <span>h</span>{" "}
        </p>
      </div>
      <div className="cena">
        <span>200 $</span>
      </div>
      <div className="dugme">
        <div >
          <div className="link">
            Kontakt
            <Link href="/kontakt">Kontakt</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
