"use client";

import Link from "next/link";
import { scrollToHash } from "../utils";
import { useRouter } from "next/navigation";

export const Footer = () => {
  const router = useRouter();
  return (
    <footer className="flex justify-center">
      <div className="grid max-w-[1200px] w-full px-6 items-center flex-col mt-20">
        <div className="grid [grid-template-areas:'logo'_'divider'_'home'_'destination'_'about'_'contacts'_'terms'] md:[grid-template-areas:'home_destination_logo_about_contacts'_'divider_divider_divider_divider_divider'_'terms_terms_terms_terms_terms'] gap-4 w-full items-center">
          <nav className="nav-link text-center cursor-pointer [grid-area:home]">
            <Link href="/">Home</Link>
          </nav>
          <nav
            className="nav-link text-center cursor-pointer [grid-area:destination]"
            onClick={() => router.push("/#destinations")}
          >
            Destinations
          </nav>
          <div className="text-center cursor-pointer [grid-area:logo]">
            <Link href="/">LOGO</Link>
          </div>
          <nav className="nav-link text-center cursor-pointer [grid-area:about]">
            <Link href="/about-us">About us</Link>
          </nav>
          <nav
            className="nav-link text-center cursor-pointer [grid-area:contacts]"
            onClick={() => scrollToHash("contacts")}
          >
            Contacts
          </nav>
          <div className="grid [grid-area:divider] mt-4 md:mt-7 h-[1px] bg-black max-w-full w-full" />
          <div className="grid [grid-area:terms] justify-center mt-12 mb-10">
            <div>
              <p className="text-center">
                © {new Date().getFullYear()} Ocean Spirit. All rights reserved.
              </p>
              <p className="text-center">
                created with ❤️ by{" "}
                <a href="https://twitter.com/yev_henii" target="_blank">
                  yev
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
