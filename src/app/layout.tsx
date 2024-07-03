import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HomeNavbar from "./components/Home-Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "emily.chrisann",
  description: "Emily's Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav><HomeNavbar /></nav>
        {children}
      </body>
    </html>
  );
}
