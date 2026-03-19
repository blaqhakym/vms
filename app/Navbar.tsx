"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

const pathname = usePathname();

  const navLinkClass = (path: string) =>
    `transition-colors ${
      pathname === path ? "text-primary font-semibold" : "text-text-secondary hover:text-text-primary"
    }`;



  return (
    <div className="mx-auto w-full lg:w-[70%] px-2 lg:px-0 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">VMS</h1>
            <nav>
              <ul className="flex items-center space-x-4">
                <li>
                  <Link href="/" className={navLinkClass("/")}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/visitor-log" className={navLinkClass("/visitor-log")}>
                    Visitor Log
                  </Link>
                </li>
                <li>
                  <Link href="/active-visitor" className={navLinkClass("/active-visitor")}>
                    Active Visitors
                  </Link>
                </li>
                <li>
                  <Link
                    href="/login"
                    className={`px-3 py-1 rounded text-white transition-colors ${
                      pathname === "/login" ? "bg-primary" : "bg-primary/90 hover:bg-primary-hover"
                    }`}
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </nav>
            </div>
  );
}