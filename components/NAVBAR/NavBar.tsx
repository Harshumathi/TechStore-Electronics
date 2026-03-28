"use client";

import NavLogo from "./NavLogo";
import NavLinks from "../NavLinks";
import Toggle from "./Toggle";
import WishList from "./WishList";
import Cart from "./Cart";
import Signin from "./Signin";

interface NavBarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  wishlistCount: number;
  cartCount: number;
  onOpenWishlist: () => void;
  onOpenCart: () => void;
}

const NavBar = ({
  darkMode,
  onToggleDarkMode,
  wishlistCount,
  cartCount,
  onOpenWishlist,
  onOpenCart,
}: NavBarProps) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLogo />
        <NavLinks />
        <div className="nav-actions">
          <Toggle darkMode={darkMode} onToggle={onToggleDarkMode} />
          <WishList wishlistCount={wishlistCount} onOpen={onOpenWishlist} />
          <Cart cartCount={cartCount} onOpen={onOpenCart} />
          <Signin />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
