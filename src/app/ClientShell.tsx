"use client";

import "./App.css";
import { useState, useEffect, useRef } from "react";
import type { Product, CartItem } from "../../types/types";

// ---- Components ----
import NavBar from "../../components/NAVBAR/NavBar";
import Hero from "../../components/HEROSECTION/Hero";
import BestSellers from "../../components/SECTIONS/BestSellers";
import AllProducts from "../../components/SECTIONS/AllProducts";
import Contact from "../../components/SECTIONS/Contact";
import CartSidebar from "../../components/CartSidebar";
import WishlistSidebar from "../../components/WishlistSidebar";
import Footer from "../../components/Footer";

// ---- Props (products come from server now) ----
interface ClientShellProps {
  products: Product[];
}

export default function ClientShell({ products }: ClientShellProps) {
  const allBrands: string[] = [...new Set(products.map((p) => p.brand))];

  // REF
  const topRef = useRef<HTMLDivElement>(null);

  function scrollOnTop() {
    topRef.current?.scrollIntoView();
  }

  // Cart state — persisted in localStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") return [];
    const savedCart = localStorage.getItem("techstore-cart");
    if (savedCart) {
      try {
        return JSON.parse(savedCart) as CartItem[];
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

  // Wishlist state — persisted in localStorage
  const [wishlist, setWishlist] = useState<number[]>(() => {
    if (typeof window === "undefined") return [];
    const savedWishlist = localStorage.getItem("techstore-wishlist");
    if (savedWishlist) {
      try {
        return JSON.parse(savedWishlist) as number[];
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

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedBrand, setSelectBrand] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("default");
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(true);

  // Sync dark mode with body class
  useEffect(() => {
    document.body.className = darkMode ? "dark-theme" : "light-theme";
  }, [darkMode]);

  // ---- Cart functions ----
  function addToCart(product: Product) {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  function increaseQuantity(productId: number) {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decreaseQuantity(productId: number) {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(0, item.quantity - 1) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(productId: number) {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  }

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // ---- Wishlist function ----
  function toggleWishList(productId: number) {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  }

  // ---- Filter and Sort ----
  const displayProducts = products.filter((product) => {
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

  const wishlistProducts = products.filter((p) => wishlist.includes(p.id));
  const bestSellerProducts = displayProducts.filter((p) => p.isBestSeller);
  const otherProducts = displayProducts.filter((p) => !p.isBestSeller);

  // ---- JSX ----
  return (
    <div ref={topRef} className={`app ${darkMode ? "dark" : "light"}`}>
      <NavBar
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        wishlistCount={wishlist.length}
        cartCount={cartCount}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <Hero />

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

      <AllProducts
        displayProducts={otherProducts}
        cartItems={cartItems}
        wishlist={wishlist}
        onAddToCart={addToCart}
        onToggleWishlist={toggleWishList}
      />

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        cartTotal={cartTotal}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
        onRemove={removeFromCart}
      />

      <WishlistSidebar
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onAddToCart={addToCart}
        onToggleWishlist={toggleWishList}
      />

      {(isCartOpen || isWishlistOpen) && (
        <div
          className="overlay"
          onClick={() => {
            setIsCartOpen(false);
            setIsWishlistOpen(false);
          }}
        />
      )}

      <Contact />

      <Footer onScrollTop={scrollOnTop} />
    </div>
  );
}