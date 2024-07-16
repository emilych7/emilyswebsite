import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HomeNavbar from "./components/Home-Navbar";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Em's Digital Diary",
  description: "Emily's Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={"stars "+ inter.className} >
        <Providers>
          <div className="twinkling">
            <nav className="w-full">
              <HomeNavbar />
            </nav>
            <main>
            {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
