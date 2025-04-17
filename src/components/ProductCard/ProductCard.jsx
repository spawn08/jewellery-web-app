import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaRegStar,
  FaStarHalfAlt,
  FaShoppingBag,
} from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import ImagePlaceHolder from "../ImagePlaceHolder/ImagePlaceHolder";
import "./ProductCard.css";
import { products } from "../../data/products";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const formatPrice = (price) => {
    return "₹" + price.toLocaleString("en-IN");
  };

  const discountPercentage = () => {
    return Math.round(
      ((product.price - product.discountPrice) / product.price) * 100
    );
  };

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  const renderRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for (let index = 0; index < fullStars; index++) {
      stars.push(<FaStar key={`full-${index}`} />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" />);
    }

    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} />);
    }

    return stars;
  };

  return (
    <div className="product-card">
      {product.new && <span className="product-tag new-tag">New</span>}
      {product.bestseller && (
        <span className="product-tag bestseller-tag">Bestseller</span>
      )}

      <Link to={`/product/${product.id}`} className="product-image">
        <ImagePlaceHolder
          category={product.category}
          productId={product.id}
          alt={product.name}
          height={240}
        />
      </Link>

      <div className="product-info">
        <div className="product-rating">
          {renderRating(product.rating)}
          <span className="rating-value">{product.rating}</span>
        </div>
        <Link to={`/product/${product.id}`} className="product-name">
          {product.name}
        </Link>

        <div className="product-price">
          <span className="discount-price">
            {formatPrice(product.discountPrice)}
          </span>
          <span className="original-price">{formatPrice(product.price)}</span>
          <span className="discount-percentage">-{discountPercentage()}%</span>
        </div>

        <p className="product-stock">
          {product.stock > 10
            ? "In Stock"
            : product.stock > 0
            ? `Only ${product.stock} left`
            : "Out of Stock"}
        </p>

        <button
          className="add-to-cart-btn"
          disabled={product.stock === 0}
          onClick={handleAddToCart}
        >
          <FaShoppingBag />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
