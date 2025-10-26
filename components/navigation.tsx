"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();

  return (
    <nav className="fixed left-1/2 top-5 z-10 w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%] -translate-x-1/2 rounded-full bg-[#2d2d2d] py-5 ">
      <ul className="flex justify-center gap-12 ">
        <li className="list-none transform transition-transform duration-100 hover:scale-105 whitespace-nowrap">
          <Link href="/" className="text-white">
            Home
          </Link>
          {path === "/" && "🔥"}
        </li>
        <li className="list-none transform transition-transform duration-100 hover:scale-105 whitespace-nowrap">
          <Link href="/about-us" className="text-white">
            About Us
          </Link>
          {path === "/about-us" && "🔥"}
        </li>
      </ul>
    </nav>
  );
}
