import { navLinks } from "@/app/data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const NavDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <nav className="nav-link flex items-center">
          Destinations{" "}
          <div
            className={`w-0 h-0 ml-[4px] triangle transform transition-transform duration-300 data-[state=closed]:rotate-180 `}
          ></div>
        </nav>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          {navLinks.map((link) => {
            return (
              <DropdownMenuItem key={link.name}>
                <a
                  href={link.url}
                  className="flex justify-center w-full px-4 py-2"
                >
                  {link.name}
                </a>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
