import ProductCard from "./ProductCard.jsx";

const AllProducts = ({
    displayProducts,
    cartItems,
    wishlist,
    onAddToCart,
    onToggleWishlist,
}) => {
    return (
        <section className="products-section" id="deals">
            <div className="section-header">
                <h2 className="section-title">All Products</h2>
            </div>

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

export default AllProducts;
