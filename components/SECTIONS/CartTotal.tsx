"use client";

import { CartIcon } from "../Icons";

interface CartTotalProps {
  cartCount: number;
  cartTotal: number;
  onViewCart: () => void;
}

const CartTotal = ({ cartCount, cartTotal, onViewCart }: CartTotalProps) => {
  return (
    <div className="grand-total-banner">
      <div className="banner-content">
        <CartIcon />
        <span>
          Items in Cart: <strong>{cartCount}</strong>
        </span>
        <span className="separator">|</span>
        <span>
          Grand Total: <strong>₹{cartTotal.toLocaleString()}</strong>
        </span>
      </div>
      <button className="view-cart-link" onClick={onViewCart}>
        View Cart &rarr;
      </button>
    </div>
  );
};

export default CartTotal;
