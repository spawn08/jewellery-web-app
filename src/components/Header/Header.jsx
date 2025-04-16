import React, { useState, useContext } from "react";
import { FaBars, FaSearch, FaShoppingBag, FaTimes, FaUser } from "react-icons/fa";
import "./Header.css";
import { CartContext } from "../../context/CartContext";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { getItemCount } = useContext(CartContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          <div className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
          <div className="logo-container">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <nav className={`main-nav ${isMenuOpen ? 'menu-open' : ''}`}>
            <ul>
              <li>
                <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" onClick={() => setIsMenuOpen(false)}>
                  Shop All
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products?category=necklace"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Necklaces
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products?category=earrings"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Earrings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products?category=bracelet"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Bracelets
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products?category=ring"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Rings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products?category=anklet"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Anklets
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <button
              className="icon-button search-button"
              onClick={toggleSearch}
            >
              <FaSearch />
            </button>
            <Link to="/account" className="icon-button">
              <FaUser />
            </Link>
            <Link to="/cart" className="icon-button cart-icon">
              <FaShoppingBag />
              {getItemCount() > 0 && (
                <span className="cart-count">{getItemCount()}</span>
              )}
            </Link>
          </div>
        </div>
        <div className={`search-bar ${isSearchOpen ? 'show': ''}`}>
            <input type="text"  placeholder="Search for jewellery..."/>
            <button className="search-submit">
                <FaSearch />
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
