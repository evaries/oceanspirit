"use client";
import Link from "next/link";
import { scrolltoHash } from "../utils";
import { NavDropdown } from "./NavDropdown";

const Header = () => {
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
          <NavDropdown />
          <nav className="nav-link">
            <Link href="/about-us">About us</Link>
          </nav>
          <nav className="nav-link" onClick={() => scrolltoHash("contacts")}>
            Contacts
          </nav>
        </div>
        <div>EN</div>
      </div>
    </header>
  );
};

export default Header;
