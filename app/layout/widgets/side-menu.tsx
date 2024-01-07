"use client";

import { BurgerMenu } from "./burger-menu";

export const SideMenu = () => {
  return (
    <div className={"flex flex-col w-full top-0 z-1 bg-transparent z-50"}>
      <div className="flex justify-between w-full p-8">
        <div>LOGO</div>
        <div className="cursor-pointer">
          <BurgerMenu />
        </div>
      </div>
    </div>
  );
};
