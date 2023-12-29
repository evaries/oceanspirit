"use client";

import Header from "../entities/Header";
import { useWindowSize } from "../utils";
import SideMenu from "./SideMenu";

const TopBar = () => {
  const size = useWindowSize();
  if (!size.width) return null;
  return <>{size.width > 768 ? <Header /> : <SideMenu />}</>;
};

export default TopBar;
