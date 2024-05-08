import Link from "next/link";

import { FCC } from "@/types";
import { CgProfile } from "react-icons/cg";
import { CiMusicNote1, CiSettings } from "react-icons/ci";
import { FaHistory } from "react-icons/fa";
import { IoPlayCircleSharp } from "react-icons/io5";
import { SiYoutubemusic } from "react-icons/si";
import { BiPencil } from "react-icons/bi";

const menuList = [
  {
    href: "/my-library",
    label: "My Library",
    icon: <CgProfile />,
  },
  {
    href: "/music",
    label: "Music",
    icon: <CiMusicNote1 />,
  },
  {
    href: "/market",
    label: "Market",
    icon: <SiYoutubemusic />,
  },
  {
    href: "/artists",
    label: "Artists",
    icon: <CiSettings />,
  },
];

const menuListLib = [
  {
    href: "/recent",
    label: "Recent",
    icon: <FaHistory />,
  },
  {
    href: "/playlists",
    label: "Playlists",
    icon: <IoPlayCircleSharp />,
  },
  {
    href: "/profile",
    label: "Profile",
    icon: <CgProfile />,
  },
  {
    href: "/creator",
    label: "Creator",
    icon: <BiPencil />,
  },
];

const Sidebar: FCC = () => {
  return (
    <aside
      id="default-sidebar"
      className="m-0 sm:m-2 fixed z-40 w-64 h-[calc(100vh-16px)] transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
      suppressHydrationWarning
    >
      <div className="h-full px-3 py-4 rounded-xl overflow-clip relative aside">
        <ul className="space-y-2 font-medium">
          <li className="rounded-lg text-gray-500">
            <span className="ms-3 font-medium text-lg uppercase">menu</span>
          </li>
          {menuList.map((menu) => (
            <li key={menu.href} className="rounded-lg hover:bg-[#6493d0]/30">
              <Link
                href={menu.href}
                className="flex items-center p-2 rounded-lg group"
              >
                {menu.icon}
                <span className="ms-3 font-medium text-xl">{menu.label}</span>
              </Link>
            </li>
          ))}
          <li className="rounded-lg text-gray-500">
            <span className="ms-3 font-medium text-lg uppercase">Library</span>
          </li>
          {menuListLib.map((menu) => (
            <li key={menu.href} className="rounded-lg hover:bg-[#6493d0]/30">
              <Link
                href={menu.href}
                className="flex items-center p-2 rounded-lg group"
              >
                {menu.icon}
                <span className="ms-3 font-medium text-xl">{menu.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="backdrop-bg" />
    </aside>
  );
};

export default Sidebar;
