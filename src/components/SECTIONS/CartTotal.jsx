import { CartIcon } from "../Icons.jsx";

const CartTotal = ({ cartCount, cartTotal, onViewCart }) => {
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
