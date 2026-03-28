"use client";

import type { ChangeEvent } from "react";
import { SearchIcon } from "../Icons";

interface UserControlsProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedBrand: string;
  onBrandChange: (value: string) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
  allBrands: string[];
}

const UserControls = ({
  searchTerm,
  onSearchChange,
  selectedBrand,
  onBrandChange,
  sortBy,
  onSortChange,
  allBrands,
}: UserControlsProps) => {
  return (
    <div className="controls-bar">
      {/* Search */}
      <div className="search-box">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onSearchChange(e.target.value)}
        />
      </div>

      {/* Brand Filter */}
      <select value={selectedBrand} onChange={(e: ChangeEvent<HTMLSelectElement>) => onBrandChange(e.target.value)}>
        <option value="All">All Brands</option>
        {allBrands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>

      {/* Sort */}
      <select value={sortBy} onChange={(e: ChangeEvent<HTMLSelectElement>) => onSortChange(e.target.value)}>
        <option value="default">Sort By</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Top Rated</option>
      </select>
    </div>
  );
};

export default UserControls;
