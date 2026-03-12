import { HeartIcon } from "../Icons.jsx";

const WishLish = ({ wishlistCount, onOpen }) => {
    return (
        <div className="nav-icon-wrapper" title="Wishlist" onClick={onOpen}>
            <HeartIcon />
            {wishlistCount > 0 && (
                <span className="badge wishlist-badge">{wishlistCount}</span>
            )}
        </div>
    );
};

export default WishLish;
