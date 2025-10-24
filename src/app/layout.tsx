import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HomeNavbar from "./components/Home-Navbar";
import { Open_Sans } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

const openSans = Open_Sans ({
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: "Emily Chrisann Hernandez",
  description: "Emily's Personal Website",
  openGraph: {
    title: 'Emily Chrisann Hernandez',
    description: "Emily's Personal Website",
    url: 'https://emilychrisann.com',
    siteName: 'Emily Chrisann Hernandez',
    images: [
      {
        url: 'https://emilychrisann.com/metadata-image.jpg', 
        width: 1200,
        height: 630, 
        alt: 'Preview Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="stars">
            <nav className={openSans.className + " w-full"}>
              <HomeNavbar />
            </nav>
            <main className={openSans.className + "h-full"}>
            {children}
            </main>
      </body>
    </html>
  );
}
