"use client";

import type { MouseEvent } from "react";

const NavLinks = () => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ul className="nav-links">
      <li>
        <a
          href="#products"
          className="nav-link"
          onClick={(e) => handleClick(e, "products")}
        >
          Products
        </a>
      </li>
      <li>
        <a
          href="#deals"
          className="nav-link"
          onClick={(e) => handleClick(e, "deals")}
        >
          Deals
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className="nav-link"
          onClick={(e) => handleClick(e, "contact")}
        >
          Support
        </a>
      </li>
      <li>
        <a href="#" className="nav-link">
          About
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
