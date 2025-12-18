import type { Metadata } from "next";
import { Geist, Poppins } from "next/font/google";
import "@/styles/global.css";
import Navbar from "@/components/ui/Navbar/Navbar";
import BackgroundImage from "@/components/layout/BackgroundImage";
import { cn } from "@/lib/utils";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CinemaCloud",
  description: "Watch movies and TV shows online for free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          geist.variable,
          poppins.variable,
          "padding-page gap-vertical-lg relative flex h-screen flex-col justify-around antialiased"
        )}
      >
        <BackgroundImage imageUrl="/wallpaper.jpg" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
