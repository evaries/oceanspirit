"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { useOutsideClick } from "../utils";
import Modal from "./Modal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef(null);
  const dropdown = useRef(null);
  useOutsideClick([ref, dropdown], () => setIsMenuOpen(false));
  return (
    <header className="flex absolute top-0 w-full justify-center z-10">
      <div className="flex items-center p-10 justify-between w-full max-w-[1144px]">
        <div>
          <Link href="/">LOGO</Link>
        </div>
        <div className=" grid grid-flow-col auto-cols-max gap-4 min-w-fit">
          <nav className="nav-link">
            <Link href="/">Home</Link>
          </nav>
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative flex flex-row items-center cursor-pointer"
          >
            <div ref={ref} className="flex items-center">
              <nav className="nav-link">Destinations</nav>
              <div
                className={`w-0 h-0 ml-[4px]
              ${
                isMenuOpen ? "transform rotate-180" : ""
              } triangle transform transition-transform duration-300`}
              ></div>
            </div>
            <div
              ref={dropdown}
              className={`${
                !isMenuOpen && "hidden"
              } glass absolute flex items-center flex-col top-4 w-32 text-black group-hover:block mt-2`}
            >
              <a href="/destination/g-land" className="block px-4 py-2">
                G-Land
              </a>
              <a href="/destination/lombok" className="block px-4 py-2">
                Lombok
              </a>
              <a href="/destination/sumbawa" className="block px-4 py-2">
                Sumbawa
              </a>
            </div>
          </div>
          <nav className="nav-link">
            <Link href="/about-us">About us</Link>
          </nav>
          <nav className="nav-link">
            <Link href="/contacts">Contacts</Link>
          </nav>
        </div>
        <div>EN</div>
      </div>
    </header>
  );
};

export default Header;
