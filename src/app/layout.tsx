import type { Metadata } from "next";
import { Comfortaa, Pacifico, Playfair_Display, Poppins } from "next/font/google";
import { BackgroundMedia } from "@/components/background-media";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "700"],
});

const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-intro",
  weight: ["300", "400", "500", "600", "700"],
});

const pacifico = Pacifico({
  subsets: ["latin"],
  variable: "--font-pacifico",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Bhavika",
  description: "Bhavika — software engineer, writing + building in public.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="night"
      className={`${poppins.variable} ${playfair.variable} ${comfortaa.variable} ${pacifico.variable}`}
    >
      <body>
        <BackgroundMedia />
        <div className="site-content">{children}</div>
      </body>
    </html>
  );
}
