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
    const { email, naslov, text, ime, tip, date, broj } = req.body;
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
      html: `<h1>${ime} ${tip}</h1>
      <p>${text}</p>
      <p>${date}</p>
      <p>${broj} ljudi</p>
      from <a href="mailto:${email}">${email}</a>
      `,
    };
    const mailOptionss = {
      from: "andrijadj96@gmail.com",
      to: email,
      subject: naslov,
      text: `Postovani,
      Primili smo vasu poruku i zelimo da Vas obvestimo da cemo u najkracem  roku odgovoriti na nju.
      
      
      Vas Pound`,
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
