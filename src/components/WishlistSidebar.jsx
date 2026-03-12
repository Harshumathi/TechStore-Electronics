import { TrashIcon, CheckIcon } from "./Icons.jsx";
import { useState } from "react";

const WishlistSidebar = ({
  isOpen,
  onClose,
  wishlistProducts,
  onAddToCart,
  onToggleWishlist,
}) => {
  const [addedItems, setAddedItems] = useState({});

  const handleAddToCart = (item) => {
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
