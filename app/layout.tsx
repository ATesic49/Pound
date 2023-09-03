import { Aoboshi_One, Kablammo } from "next/font/google";
import "../public/global.css";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VIber from "./components/Viber";
const name = ["Andrija Arsenijevic"];
const AoboshiOne =Aoboshi_One({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Klub Pound | Iznajmljivanje, Proslave 18. rođendana, Žurke ",
  description:
    "Bliži ti se rođendan?Ne znaš gde proslaviti? Naš klub Pound nudi ti prostran prostor za male pare.Nebitno da li slaviš godišnjicu, punoletstvo, ili rođenje deteta.Klub Pound je uvek tu za Vas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="icon" type="image/x-icon" href="/logo.svg" />
      </head>
      <body className={AoboshiOne.className}>
        {children}
        <VIber />
        <Footer />
      </body>
    </html>
  );
}
