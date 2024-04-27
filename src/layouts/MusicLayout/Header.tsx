import { ConnectButton } from "@/components/Button/ConnectButton";
import Link from "next/link";
import HeaderSearch from "./HeaderSearch";

type Props = {};

const MusicHeader = (props: Props) => {
  return (
    <div className="bg-[linear-gradient(180deg,#0c2a5070,#000e1f00)] w-full h-20 rounded-3xl flex flex-row">
      <div className="flex items-center gap-2 w-full mx-4 cursor-pointer">
        <Link href="/">
          <div className="text-5xl font-alexBrush font-bold text-white">
            Tune<span className="text-[#F0D800]">Vibe</span>
          </div>
        </Link>
        <HeaderSearch />
        <ConnectButton/>
      </div>
    </div>
  );
};

export default MusicHeader;
