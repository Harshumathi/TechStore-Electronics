import { CartIcon } from "../Icons.jsx";

const Cart = ({ cartCount, onOpen }) => {
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
