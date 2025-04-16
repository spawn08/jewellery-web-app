import React from "react";
import "./Category.css";
import { Link } from "react-router-dom";
import ImagePlaceHolder from "../ImagePlaceHolder/ImagePlaceHolder";

const CategorySection = ({title, categories}) => {
  return (
    <div className="container">
      <h2 className="section-title">{title}</h2>
      <div className="categories-grid">
        {categories
          .filter((cat) => cat.id !== "all")
          .map((category) => (
            <Link
              to={`/products?category=${category.id}`}
              key={category.id}
              className="category-card"
            >
              <div className="category-image">
                <ImagePlaceHolder
                  category={category.id}
                  alt={category.name}
                  height={180}
                />
              </div>
              <h3>{category.name}</h3>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default CategorySection;
