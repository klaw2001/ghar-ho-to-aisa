import { Inter } from "next/font/google";
import "./globals.css";
import "./style.css";
import { AOSInit } from "@/partials/AOSInit";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ghar Ho To Aisa",
  description: "A Real Estate Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AOSInit/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
