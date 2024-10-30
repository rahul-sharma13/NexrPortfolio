"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // client component hook. which lets you read current URL's pathname

const links: { name: string; path: string }[] = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  // console.log(pathname);

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link href={link.path} key={index} className={`${link.path === pathname && "text-portColor border-b-2 border-portColor"} capitalize hover:text-portColor font-medium transition-all`}>
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
