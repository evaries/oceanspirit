"use client";

import Link from "next/link";
import { DestinationDropdown } from "../entities/destination-dropdown";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  return (
    <header className="flex top-0 w-full justify-center z-10">
      <div className="flex items-center p-10 justify-between w-full max-w-[1144px]">
        <div>
          <Link href="/">LOGO</Link>
        </div>
        <div className=" grid grid-flow-col auto-cols-max gap-4 min-w-fit">
          <nav className="nav-link">
            <Link href="/">Home</Link>
          </nav>
          <DestinationDropdown />
          <nav className="nav-link">
            <Link href="/about-us">About us</Link>
          </nav>
          <nav className="nav-link" onClick={() => router.push("/#contacts")}>
            Contacts
          </nav>
        </div>
        <div>EN</div>
      </div>
    </header>
  );
};
