import React from "react";
import "./FeaturedSection.css";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";

const FeaturedSection = ({ title, featuredProducts }) => {
  return (
    <div className="container">
      <h2 className="section-title">{title}</h2>
      <div className="featured-products">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="view-all-links">
        <Link to="/products">View All Products</Link>
      </div>
    </div>
  );
};

export default FeaturedSection;
