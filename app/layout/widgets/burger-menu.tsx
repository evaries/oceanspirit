import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { scrollToHash } from "../utils";
import { useState } from "react";
import Link from "next/link";

const destinations = [
  { name: "G-Land", link: "/destination/g-land" },
  { name: "Lombok", link: "/destination/lombok" },
  { name: "Sumbawa", link: "/destination/sumbawa" },
] as const;

export const BurgerMenu = () => {
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const close = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen}>
      <SheetTrigger asChild onClick={() => setIsOpen(true)}>
        <Image
          src={"/icons/ic_burger.svg"}
          width={30}
          height={30}
          alt="burger"
        />
      </SheetTrigger>
      <SheetContent
        side={"top"}
        onInteractOutside={close}
        onCloseButtonClick={close}
      >
        <SheetHeader>
          <div className={"flex flex-col items-center"}>
            <nav className="nav-link-mobile text-xl" onClick={close}>
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
                {destinations.map((destination) => {
                  return (
                    <Link
                      href={destination.link}
                      onClick={close}
                      className="block px-4 py-2"
                      key={destination.name}
                    >
                      {destination.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <nav className="nav-link-mobile" onClick={close}>
              <Link href="/about-us">About us</Link>
            </nav>
            <nav
              className="nav-link-mobile"
              onClick={() => {
                scrollToHash("contacts");
                close();
              }}
            >
              Contacts
            </nav>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
