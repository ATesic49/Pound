import { Kablammo } from "@next/font/google";
import Navbar from "./components/Navbar";
import "../public/global.css";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const name = ["Andrija Arsenijevic"];
const cairo = Kablammo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title:
    "Klub Pound | Iznajmljivanje Kluba | Proslave 18. rodjendana | Okupljanja",
  description: "Ako citas ovo, uradi desckripciju",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/logo.svg" />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
