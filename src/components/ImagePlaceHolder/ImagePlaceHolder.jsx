import React from "react";
import "./ImagePlaceHolder.css";

// Jewelry images using placeholder services with appropriate jewelry images
const jewelryImages = {
  rings: [
    "https://www.giva.co/cdn/shop/files/BR0699_1.jpg",
    "https://www.giva.co/cdn/shop/files/BR0699_1.jpg",
    "https://www.giva.co/cdn/shop/files/BR0699_1.jpg",
    "https://www.giva.co/cdn/shop/files/BR0699_1.jpg",
  ],
  necklaces: [
    "https://www.giva.co/cdn/shop/files/BR0699_1.jpg",
    "https://www.giva.co/cdn/shop/files/BR0699_1.jpg",
    "https://www.giva.co/cdn/shop/files/BR0699_1.jpg",
  ],
  earrings: [
    "https://www.giva.co/cdn/shop/files/BR0699_1.jpg",
    "https://www.giva.co/cdn/shop/files/BR0699_1.jpg",
    "https://www.giva.co/cdn/shop/files/BR0699_1.jpg",
    "https://www.giva.co/cdn/shop/files/BR0699_1.jpg",
  ],
  bracelets: [
    "https://www.giva.co/cdn/shop/files/BR0699_1.jpg",
    "https://www.giva.co/cdn/shop/files/BR0699_1.jpg",
    "https://www.giva.co/cdn/shop/files/BR0699_1.jpg",
  ],
  pendants: [
    "https://www.giva.co/cdn/shop/files/BR0699_1.jpg",
    "https://www.giva.co/cdn/shop/files/BR0699_1.jpg",
  ],
  watches: [
    "https://www.giva.co/cdn/shop/files/BR0699_1.jpg",
    "https://www.giva.co/cdn/shop/files/BR0699_1.jpg",
  ],
  default: [
    "https://www.giva.co/cdn/shop/files/BR0699_1.jpg",
    "https://www.giva.co/cdn/shop/files/BR0699_1.jpg",
    "https://www.giva.co/cdn/shop/files/BR0699_1.jpg",
  ],
};

const ImagePlaceHolder = ({
  category = "default",
  productId,
  alt = "Jewelry product",
  height = 250,
  className = "",
}) => {
  const getImageForProduct = (category, productId) => {
    const lowerCategory = category.toLowerCase();

    const mappedCategory =
      lowerCategory === "ring"
        ? "rings"
        : lowerCategory === "necklace"
        ? "necklaces"
        : lowerCategory === "earring"
        ? "earrings"
        : lowerCategory === "bracelet"
        ? "bracelets"
        : lowerCategory === "pendant"
        ? "pendants"
        : lowerCategory === "watch"
        ? "watches"
        : lowerCategory;
    const categoryImages = jewelryImages[mappedCategory] || jewelryImages.default;
    
    if(productId) {
        const seed = productId.toString().split('').reduce((a,b) => a + b.charCodeAt(0), 0);
        const index = seed % categoryImages.length;
        return `${categoryImages[index]}?sig=${seed}`;
    }

    // Otherwise, pick a consistent image from the category
    const randomIndex = Math.floor(Math.random() * categoryImages.length);
    return categoryImages[randomIndex];
  };

  const handleImageError = (e) => {
    e.target.onerror = null
    e.target.src = `https://via.placeholder.com/${height}x${height}?text=Ziva+Jewellery`;
  }

  return (
    <div
      className={`image-placeholder ${className}`}
      style={{ height: `${height}px` }}
    >
      <img
        src={getImageForProduct(category, productId)}
        alt={alt}
        onError={handleImageError}
        loading="lazy"
      />
    </div>
  );
};

export default ImagePlaceHolder;
