import { navLinks } from "@/app/data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useState } from "react";

export const DestinationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => {
    setIsOpen(false);
  };
  return (
    <DropdownMenu open={isOpen}>
      <DropdownMenuTrigger asChild>
        <nav
          className="nav-link flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          Destinations{" "}
          <div
            className={`w-0 h-0 ml-[4px] triangle transform transition-transform duration-300 data-[state=closed]:rotate-180 `}
          ></div>
        </nav>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" onInteractOutside={close}>
        <DropdownMenuGroup>
          {navLinks.map((link) => {
            return (
              <DropdownMenuItem key={link.name} onClick={close}>
                <Link
                  href={link.url}
                  className="flex justify-center w-full px-4 py-2"
                >
                  {link.name}
                </Link>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
