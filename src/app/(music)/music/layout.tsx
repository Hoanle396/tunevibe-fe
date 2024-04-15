"use client";
import MusicHeader from "@/layouts/MusicLayout/Header";
import MusicSidebar from "@/layouts/MusicLayout/MusicSidebar";
import "@/styles/global.scss";
import { Alex_Brush, Montserrat } from "next/font/google";

const alex_Brush = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-alexBrush",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export default function MusicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${alex_Brush.variable} ${montserrat.variable} overflow-x-hidden relative`}
      >
        <div className="flex w-full gap-2">
          <MusicSidebar />
          <section className="flex flex-col w-full m-2 ml-[276px] gap-8">
            <MusicHeader />
            <main>{children}</main>
          </section>
        </div>
      </body>
    </html>
  );
}
