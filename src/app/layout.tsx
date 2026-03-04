import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { BackgroundMedia } from "@/components/background-media";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "700"],
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
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body>
        <BackgroundMedia />
        <div className="site-content">{children}</div>
      </body>
    </html>
  );
}
