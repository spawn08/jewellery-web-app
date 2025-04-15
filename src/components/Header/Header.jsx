import React, { useState, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Logo from "../Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { getItemCount } = useContext(CartContext);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

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
        </div>
      </div>
    </header>
  );
};

export default Header;
