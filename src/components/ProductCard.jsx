import React from "react";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image_url} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <button>+ Add to Cart</button>
    </div>
  );
}
export default ProductCard;
