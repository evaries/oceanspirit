import { ReactNode } from "react";

export type HeaderNavProps = {
  children: ReactNode;
};

const HeaderNav: React.FC<HeaderNavProps> = ({ children }) => {
  return <nav className={`nav-link`}>{children}</nav>;
};

export default HeaderNav;
