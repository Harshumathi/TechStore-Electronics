"use client";

import { TrashIcon } from "./Icons";
import type { CartItem } from "../types";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  cartTotal: number;
  onIncrease: (productId: number) => void;
  onDecrease: (productId: number) => void;
  onRemove: (productId: number) => void;
}

const CartSidebar = ({
  isOpen,
  onClose,
  cartItems,
  cartTotal,
  onIncrease,
  onDecrease,
  onRemove,
}: CartSidebarProps) => {
  return (
    <aside className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <h2>Your Cart</h2>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
      </div>
      <div className="sidebar-content">
        {cartItems.length === 0 ? (
          <p className="empty-msg">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="item-info">
                <h4>{item.name}</h4>
                <p>₹{item.price.toLocaleString()}</p>
                <div className="qty-controls">
                  <button onClick={() => onDecrease(item.id)}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onIncrease(item.id)}>+</button>
                  <button
                    className="remove-btn"
                    onClick={() => onRemove(item.id)}
                  >
                    <TrashIcon />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="sidebar-footer">
          <div className="total-row">
            <span>Total:</span>
            <span>₹{cartTotal.toLocaleString()}</span>
          </div>
          <button className="checkout-btn">Checkout</button>
        </div>
      )}
    </aside>
  );
};

export default CartSidebar;
