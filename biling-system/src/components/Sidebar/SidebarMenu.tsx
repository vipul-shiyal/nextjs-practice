"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBarMenu({ href, menuName }) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(
        pathname.includes(href)) &&
        "bg-graydark dark:bg-meta-4"
      }`}
    >
      {menuName}
    </Link>
  )
}
