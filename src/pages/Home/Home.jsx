import React from "react";
import { products, categories } from "../../data/products";
import "./Home.css";
import CategorySection from "../../components/Categories/Category";
import HeroSection from "../../components/Hero/HeroSection";
import FeaturedSection from "../../components/Featured/FeaturedSection";

const Home = () => {
  //Get Featured Products
  const featuredProducts = products.filter((product) => product.bestseller).slice(0, 4);
  // Get New Arrivals Products
  const newArrivals = products.filter((product) => product.newArrivals).slice(0, 4);

  return (
    <div className="home-page">
      <section className="hero-section">
        <HeroSection header={"Elegance in Every Piece"} />
      </section>

      {/* Category Section */}
      <section className="categories-section">
        <CategorySection title="Shop by Category" categories={categories} />
      </section>

      <section className="featured-section">
        <FeaturedSection title={"Bestsellers"} featuredProducts={featuredProducts}/>
      </section>
      {/* <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Bestsellers</h2>
          <div className="featured-products">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="view-all-link">
            <Link to="/products">View All Products</Link>
          </div>
        </div>
      </section> */}

      <section className="banner-section">Banner Section</section>

      <section className="new-arrivals-section">New Arrivals Section</section>

      <section className="benefits-section">Benefits Section</section>
    </div>
  );
};

export default Home;
