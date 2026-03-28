"use client";

import { HeartIcon } from "../Icons";

interface WishLishProps {
  wishlistCount: number;
  onOpen: () => void;
}

const WishLish = ({ wishlistCount, onOpen }: WishLishProps) => {
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
