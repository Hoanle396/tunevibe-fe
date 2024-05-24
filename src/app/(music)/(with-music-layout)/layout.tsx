"use client";
import Player from "@/components/player/Player";
import PlayListProvider from "@/components/providers/PlayListProvider";
import { NO_PLAY_ROUTE } from "@/constants/constanst";
import MusicHeader from "@/layouts/MusicLayout/Header";
import MusicSidebar from "@/layouts/MusicLayout/MusicSidebar";
import "@/styles/global.scss";
import { usePathname } from "next/navigation";

export default function MusicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  return (
    <div className="w-full flex gap-2">
      <MusicSidebar />
      <section className="flex flex-col w-full m-0 sm:m-2 ml:0 sm:ml-[276px] gap-8">
        <MusicHeader />
        <main>{children}</main>
        {!NO_PLAY_ROUTE.includes(path) && <Player />}
        <PlayListProvider />
      </section>
    </div>
  );
}
