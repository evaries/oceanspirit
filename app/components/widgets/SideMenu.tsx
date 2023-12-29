"use client";

import Image from "next/image";
import Link from "next/link";
import { scrolltoHash } from "../utils";
import { useState } from "react";

const SideMenu = () => {
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  return (
    <div
      className={`flex flex-col absolute w-full top-0 z-1 ${
        isSideMenuOpen ? "bg-surface-50" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between w-full p-8">
        <div>LOGO</div>
        <div
          className="cursor-pointer"
          onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
        >
          <Image
            src={"/icons/ic_burger.svg"}
            width={30}
            height={30}
            alt="burger"
          />
        </div>
      </div>
      <div
        className={`flex-col items-center pb-10 ${
          isSideMenuOpen ? "flex" : "hidden"
        }`}
      >
        <nav className="nav-link-mobile">
          <Link href="/">Home</Link>
        </nav>
        <div
          onClick={() => setIsDestinationsOpen(!isDestinationsOpen)}
          className="relative flex flex-col items-center cursor-pointer"
        >
          <div className="flex items-center">
            <nav className="nav-link-mobile">Destinations</nav>
            <div
              className={`w-0 h-0 ml-[4px]
              ${
                isDestinationsOpen ? "transform rotate-180" : ""
              } triangle transform transition-transform duration-300`}
            ></div>
          </div>
          <div
            className={`${
              !isDestinationsOpen && "hidden"
            } flex items-center flex-col top-4 w-32 text-black mt-2`}
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
        <nav className="nav-link-mobile">
          <Link href="/about-us">About us</Link>
        </nav>
        <nav
          className="nav-link-mobile"
          onClick={() => scrolltoHash("contacts")}
        >
          Contacts
        </nav>
      </div>
    </div>
  );
};

export default SideMenu;
