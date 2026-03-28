import { CartIcon } from "../Icons";

interface CartProps {
  cartCount: number;
  onOpen: () => void;
}

const Cart = ({ cartCount, onOpen }: CartProps) => {
  return (
    <div className="nav-icon-wrapper" onClick={onOpen} title="Cart">
      <CartIcon />
      {cartCount > 0 && (
        <span className="badge cart-badge">{cartCount}</span>
      )}
    </div>
  );
};

export default Cart;
