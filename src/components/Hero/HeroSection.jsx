import React from "react";
import { Link } from "react-router-dom";
import ImagePlaceHolder from "../ImagePlaceHolder/ImagePlaceHolder";
import "./HeroSection.css"

const HeroSection = ({header, description}) => {
  return (
    <div className="container">
      <div className="hero-content">
        <h1>{header}</h1>
        <p>
          Discover our collection of premium 925 silver jewellery crafted with
          precision and passion.
        </p>
        <div className="hero-buttons">
          <Link to="/products" className="btn btn-primary">
            Shop Now
          </Link>
          <Link to="/products?category=bestseller" className="btn btn-outline">
            View Bestsellers
          </Link>
        </div>
      </div>
      <div className="hero-image">
        <ImagePlaceHolder
          category="necklace"
          alt="Premium Silver Jewellery"
          height={400}
        />
      </div>
    </div>
  );
};

export default HeroSection;
