"use client";

import { Header } from "./main-header";
import { useWindowSize } from "../utils";
import { SideMenu } from "./side-menu";

const TopBar = () => {
  const size = useWindowSize();
  if (!size.width) return null;
  return <>{size.width > 768 ? <Header /> : <SideMenu />}</>;
};

export default TopBar;
