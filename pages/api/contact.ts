import { setCookie } from "cookies-next";
import { NextApiRequest, NextApiResponse } from "next";

import { toast } from "react-toastify";
const nodemailer = require("nodemailer");
// const email = process.env.EMAIL;
// const pass = process.env.EMAIL_PASS;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, naslov, text, ime } = req.body;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "andrijadj96@gmail.com",
        pass: "jvylptuuooehcqpo",
      },
    });
    const mailOptions = {
      from: email,
      to: "andrijadj96@gmail.com",
      subject: naslov,
      html: `<h1>${ime}</h1>
      <p>${text}</p>
      from <a href="mailto:${email}">${email}</a>
      `,
    };
    const mailOptionss = {
      from: "andrijadj96@gmail.com",
      to: email,
      subject: naslov,
      html: `<h1>Poštovani, primili smo vašu poruku</h1>
      <p>Poštovani, želimo da Vas obavestimo da smo primili Vašu poruku i da ćemo u najkraćem
      mogućem roku odgovoriti na nju</p>
      <h2>Srdačno, Vaš Pound </h2>
      `,
    };
    try {
      await transporter.sendMail({
        ...mailOptions,
      });
      await transporter.sendMail({
        ...mailOptionss,
      });

      return res.json({ status: "success" });
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
  return res.writeHead(302, "Bad request", { Location: "/" }).end();
}
