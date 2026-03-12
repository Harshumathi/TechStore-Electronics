import NavLogo from "./NavLogo.jsx";
import NavLinks from "../NavLinks.jsx";
import Toggle from "./Toggle.jsx";
import WishLish from "./WishLish.jsx";
import Cart from "./Cart.jsx";
import Signin from "./Signin.jsx";

const NavBar = ({
  darkMode,
  onToggleDarkMode,
  wishlistCount,
  cartCount,
  onOpenWishlist,
  onOpenCart,
}) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLogo />
        <NavLinks />
        <div className="nav-actions">
          <Toggle darkMode={darkMode} onToggle={onToggleDarkMode} />
          <WishLish wishlistCount={wishlistCount} onOpen={onOpenWishlist} />
          <Cart cartCount={cartCount} onOpen={onOpenCart} />
          <Signin />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
