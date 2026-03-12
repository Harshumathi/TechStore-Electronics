import UserControls from "./UserControls.jsx";
import CartTotal from "./CartTotal.jsx";
import ProductCard from "./ProductCard.jsx";

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
}) => {
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
