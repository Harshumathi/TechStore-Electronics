const NavLinks = () => {
    return (
        <ul className="nav-links">
            <li>
                <a 
                    href="#products" 
                    className="nav-link"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    Products
                </a>
            </li>
            <li>
                <a 
                    href="#deals" 
                    className="nav-link"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("deals")?.scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    Deals
                </a>
            </li>
            <li>
                <a 
                    href="#contact" 
                    className="nav-link"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
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
