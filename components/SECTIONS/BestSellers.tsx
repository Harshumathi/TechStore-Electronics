"use client";

import UserControls from "./UserControls";
import CartTotal from "./CartTotal";
import ProductCard from "./ProductCard";
import type { Product, CartItem } from "../../types";

interface BestSellersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedBrand: string;
  onBrandChange: (value: string) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
  allBrands: string[];
  cartItems: CartItem[];
  cartCount: number;
  cartTotal: number;
  onViewCart: () => void;
  displayProducts: Product[];
  wishlist: number[];
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (productId: number) => void;
}

const BestSellers = ({
  searchTerm,
  onSearchChange,
  selectedBrand,
  onBrandChange,
  sortBy,
  onSortChange,
  allBrands,
  cartItems,
  cartCount,
  cartTotal,
  onViewCart,
  displayProducts,
  wishlist,
  onAddToCart,
  onToggleWishlist,
}: BestSellersProps) => {
  return (
    <section className="products-section" id="products">
      <div className="section-header">
        <h2 className="section-title">Best Sellers</h2>
        <UserControls
          searchTerm={searchTerm}
          onSearchChange={onSearchChange}
          selectedBrand={selectedBrand}
          onBrandChange={onBrandChange}
          sortBy={sortBy}
          onSortChange={onSortChange}
          allBrands={allBrands}
        />
      </div>

      {/* Global Cart Total Banner */}
      {cartItems.length > 0 && (
        <CartTotal
          cartCount={cartCount}
          cartTotal={cartTotal}
          onViewCart={onViewCart}
        />
      )}

      <div className="product-grid">
        {displayProducts.map((data) => {
          const cartItem = cartItems.find((item) => item.id === data.id);
          return (
            <ProductCard
              key={data.id}
              {...data}
              isWishlisted={wishlist.includes(data.id)}
              cartQuantity={cartItem ? cartItem.quantity : 0}
              onAddToCart={() => onAddToCart(data)}
              onToggleWishlist={() => onToggleWishlist(data.id)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default BestSellers;
