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
      html: `  <body style="background-color: #ffcfa6; width: 100%">
      <h1
        id="pound"
        style="
          font-size: 10vh;
          top: 5%;
          left: 50%;
          transform: translateX(-50%);
          position: absolute;
          margin: 0;
          margin-bottom: 5%;
          letter-spacing: 1vw;
          filter: drop-shadow(0.4vw -0.4vw 0px #ff8870);
        "
      >
        POUND
      </h1>
      <img src="../../public/logo.svg" alt="" id="logo" />
      <h1
        style="
          width: 50%;
          text-align: center;
  
          margin-block: 15% 2.5%;
        "
      >
        Po<span>š</span>tovani,
      </h1>
      <p>
        Primili smo va<span>š</span>u poruku, i <span>ž</span>elimo da vas
        obavestimo da <span>ć</span>emo u najkra<span>ć</span>em roku da
        odgovorimo na nju!
      </p>
    </body> 
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
