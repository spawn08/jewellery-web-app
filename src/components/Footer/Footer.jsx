import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaPinterest,
  FaInstagram,
  FaTwitter,
  FaCreditCard,
  FaPaypal,
} from "react-icons/fa";
import Logo from "../Logo";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-col">
            <Logo width={100} height={34} />
            <p className="footer-about">
              Ziva Jewellery offers premium 925 silver jewellery crafted with
              care and elegance. Each piece is designed to make you shine with
              timeless beauty.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Pinterest">
                <FaPinterest />
              </a>
              <a href="#" aria-label="X">
                <FaTwitter />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/products">Shop All</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/products?category=necklace">Necklaces</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/products?category=earrings">Earrings</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/products?category=bracelet">Bracelets</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Information</h3>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contacts Us</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/shipping">Shipping Policy</Link>
              </li>
              <li>
                <Link to="/returns">Returns & Exchanges</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Newsletter</h3>
            <p>Subscribe to receive updates, exclusive offers, and more.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            &copy; {currentYear} Ziva Jewellery. All rights reserved.
          </div>
          <div className="payment-methods">
            <span>
              <FaCreditCard />
            </span>
            <span>
              <FaPaypal />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
