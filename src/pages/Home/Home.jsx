import React from "react";
import { Link } from "react-router-dom";
import { products, categories } from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import ImagePlaceHolder from "../../components/ImagePlaceHolder/ImagePlaceHolder";
import "./Home.css";
import CategorySection from "../../components/Categories/Category";
import HeroSection from "../../components/Hero/HeroSection";

const Home = () => {
  //Get Featured Products
  const featuredProducts = products.filter((product) => product.bestseller);
  // Get New Arrivals Products
  const newArrivals = products.filter((product) => product.newArrivals);

  return (
    <div className="home-page">
      <section className="hero-section">
        <HeroSection header={"Elegance in Every Piece"} />
      </section>

      {/* Category Section */}
      <section className="categories-section">
        <CategorySection title="Shop by Category" categories={categories} />
      </section>

      <section className="featured-section">Featured Section</section>

      <section className="banner-section">Banner Section</section>

      <section className="new-arrivals-section">New Arrivals Section</section>

      <section className="benefits-section">Benefits Section</section>
    </div>
  );
};

export default Home;
