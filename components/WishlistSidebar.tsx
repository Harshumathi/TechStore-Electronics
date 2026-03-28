"use client";


import { TrashIcon, CheckIcon } from "./Icons";
import { useState } from "react";
import type { Product } from "../types";

interface WishlistSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: Product[];
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (productId: number) => void;
}

const WishlistSidebar = ({
  isOpen,
  onClose,
  wishlistProducts,
  onAddToCart,
  onToggleWishlist,
}: WishlistSidebarProps) => {
  const [addedItems, setAddedItems] = useState<Record<number, boolean>>({});

  const handleAddToCart = (item: Product) => {
    onAddToCart(item);
    setAddedItems((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [item.id]: false }));
    }, 2000);
  };

  return (
    <aside className={`cart-sidebar wishlist-sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <h2>Your Wishlist</h2>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
      </div>
      <div className="sidebar-content">
        {wishlistProducts.length === 0 ? (
          <p className="empty-msg">Your wishlist is empty.</p>
        ) : (
          wishlistProducts.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="item-info">
                <h4>{item.name}</h4>
                <p>₹{item.price.toLocaleString()}</p>
                <div className="qty-controls wishlist-controls">
                  <button
                    className={`add-to-cart-sidebar-btn ${addedItems[item.id] ? "added" : ""}`}
                    onClick={() => handleAddToCart(item)}
                    disabled={addedItems[item.id]}
                  >
                    {addedItems[item.id] ? (
                      <>
                        <CheckIcon /> Added
                      </>
                    ) : (
                      "Add to Cart"
                    )}
                  </button>
                  <button
                    className="remove-btn"
                    onClick={() => onToggleWishlist(item.id)}
                    title="Remove from wishlist"
                  >
                    <TrashIcon />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </aside>
  );
};

export default WishlistSidebar;
