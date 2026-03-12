import "./App.css";
import products from "./data.js";
import { useState, useEffect, useRef } from "react";

// ---- Components ----
import NavBar from "./components/NAVBAR/NavBar.jsx";
import Hero from "./components/HEROSECTION/Hero.jsx";
import BestSellers from "./components/SECTIONS/BestSellers.jsx";
import AllProducts from "./components/SECTIONS/AllProducts.jsx";
import Contact from "./components/SECTIONS/Contact.jsx";
import CartSidebar from "./components/CartSidebar.jsx";
import WishlistSidebar from "./components/WishlistSidebar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const allBrands = [...new Set(products.map((p) => p.brand))];
  //REF
  const topRef = useRef(null);

  function scrollOnTop() {
    topRef.current.scrollIntoView();
  }
  //state
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("techstore-cart");
    //if the value is truthy value return that.... else empty
    if (savedCart) {
      //true
      try {
        return JSON.parse(savedCart);
      } catch (error) {
        console.error("Problem!!!", error);
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("techstore-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const [wishlist, setWishlist] = useState(() => {
    const savedwishlist = localStorage.getItem("techstore-wishlist");
    if (savedwishlist) {
      try {
        return JSON.parse(savedwishlist);
      } catch (error) {
        console.error("Problem!!!", error);
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("techstore-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectBrand] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Sync dark mode with body class
  useEffect(() => {
    document.body.className = darkMode ? "dark-theme" : "light-theme";
  }, [darkMode]);

  function addToCart(product) {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  function increaseQuantity(productId) {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  function decreaseQuantity(productId) {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(0, item.quantity - 1) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function removeFromCart(productId) {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  }

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  function toggleWishList(productId) {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    );
  }

  // Filter and Sort
  let displayProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand =
      selectedBrand === "All" || product.brand === selectedBrand;
    return matchesSearch && matchesBrand;
  });

  if (sortBy === "price-low") {
    displayProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    displayProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    displayProducts.sort((a, b) => b.rating - a.rating);
  }

  // Helper to get wishlist products
  const wishlistProducts = products.filter((p) => wishlist.includes(p.id));

  // Split into Best Sellers and All Other Products
  const bestSellerProducts = displayProducts.filter((p) => p.isBestSeller);
  const otherProducts = displayProducts.filter((p) => !p.isBestSeller);

  return (
    <div ref={topRef} className={`app ${darkMode ? "dark" : "light"}`}>
      {/* Navigation */}
      <NavBar
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        wishlistCount={wishlist.length}
        cartCount={cartCount}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Hero Section */}
      <Hero />

      {/* Best Sellers Section */}
      <BestSellers
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedBrand={selectedBrand}
        onBrandChange={setSelectBrand}
        sortBy={sortBy}
        onSortChange={setSortBy}
        allBrands={allBrands}
        cartItems={cartItems}
        cartCount={cartCount}
        cartTotal={cartTotal}
        onViewCart={() => setIsCartOpen(true)}
        displayProducts={bestSellerProducts}
        wishlist={wishlist}
        onAddToCart={addToCart}
        onToggleWishlist={toggleWishList}
      />

      {/* All Other Products Section */}
      <AllProducts
        displayProducts={otherProducts}
        cartItems={cartItems}
        wishlist={wishlist}
        onAddToCart={addToCart}
        onToggleWishlist={toggleWishList}
      />

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        cartTotal={cartTotal}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
        onRemove={removeFromCart}
      />

      {/* Wishlist Sidebar */}
      <WishlistSidebar
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onAddToCart={addToCart}
        onToggleWishlist={toggleWishList}
      />

      {/* Overlay */}
      {(isCartOpen || isWishlistOpen) && (
        <div
          className="overlay"
          onClick={() => {
            setIsCartOpen(false);
            setIsWishlistOpen(false);
          }}
        ></div>
      )}

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer onScrollTop={scrollOnTop} />
    </div>
  );
}

export default App;
