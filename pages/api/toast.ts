import { NextApiRequest, NextApiResponse } from "next";
import { cookies } from "next/dist/client/components/headers";
import { redirect } from "next/dist/server/api-utils";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return redirect(res, 200, "/o");
}
