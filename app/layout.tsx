import type { Metadata } from "next";
import { Geist, Poppins } from "next/font/google";
import "@/styles/global.css";
import Navbar from "@/components/ui/Navbar/Navbar";
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
  title: {
    default: "CinemaCloud",
    template: "%s • CinemaCloud",
  },
  description: "Watch movies and TV shows online for free.",
};

const STACK = "flex flex-col gap-vertical-lg justify-around";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          geist.variable,
          poppins.variable,
          "padding-page relative min-h-dvh antialiased",
          STACK
        )}
      >
        <Navbar />
        <main className={cn("flex-1", STACK)}>{children}</main>
      </body>
    </html>
  );
}
