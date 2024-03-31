import Button from "@/components/Button";
import Link from "next/link";

type Props = {};

export const MENU = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "NFTs",
    path: "/nfts",
  },
  {
    name: "Mint",
    path: "/mint",
  },
];

const Header = (props: Props) => {
  return (
    <div className="w-full h-24 border-b-[.1px] border-primary flex flex-1 items-center justify-center">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <div className="uppercase text-5xl font-bold text-white">
            Tune<span className="text-accent">Vibe</span>
          </div>
        </Link>
        <div className="flex justify-end items-center space-x-3">
          {MENU.map((item) => (
            <Link href={item.path} key={item.name}>
              <div
                className={`min-w-[140px] bg-transparent hover:-skew-x-[8deg]
              p-2 rounded-full group hover:border-accent-hover hover:border-[2px]  text-center`}
              >
                <span className="text-white uppercase font-semibold text-xl group-hover:text-accent">
                  {item.name}
                </span>
              </div>
            </Link>
          ))}
          <Button>CONNECT  WALLET</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
