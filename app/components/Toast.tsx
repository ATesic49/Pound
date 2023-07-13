import React from "react";
import { cookies } from "next/dist/client/components/headers";
export default function Toast() {
  const toast = cookies().has("toast");
  return (
    <>
      <h1>{toast ? "IMA TOST" : "NEMA TOST"}</h1>
    </>
  );
}
