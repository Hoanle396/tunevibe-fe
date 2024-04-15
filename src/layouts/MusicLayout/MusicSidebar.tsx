import Link from "next/link";

import { FCC } from "@/types";
import { FaGuilded } from "react-icons/fa";

const menuList = [
  {
    href: "/home",
    label: "Home",
    icon: <FaGuilded />,
  },
  {
    href: "/home",
    label: "Dashboard",
    icon: <FaGuilded />,
  },
  {
    href: "/",
    label: "Guild",
    icon: <FaGuilded />,
  },
  {
    href: "/",
    label: "Sign up",
    icon: <FaGuilded />,
  },
  {
    href: "/",
    label: "Sign in",
    icon: <FaGuilded />,
  },
];

const Sidebar: FCC = () => {
  return (
    <>
      <aside
        id="default-sidebar"
        className="m-2 fixed z-40 w-64 h-[calc(100vh-16px)] transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 rounded-xl overflow-clip relative aside">
          <ul className="space-y-2 font-medium">
            {menuList.map((menu) => (
              <li key={menu.href} className="rounded-lg hover:bg-[#6493d0]/30">
                <Link
                  href={menu.href}
                  className="flex items-center p-2 rounded-lg group"
                >
                  {menu.icon}
                  <span className="ms-3 font-medium text-xl">
                    {menu.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="backdrop-bg" />
      </aside>
    </>
  );
};

export default Sidebar;
