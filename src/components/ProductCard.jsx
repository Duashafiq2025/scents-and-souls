import React from "react";

function ProductCard({ product, addToCart }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={product.image_url} alt={product.title} />

        <div className="product-overlay">
          <span>SCENTS & SOULS</span>
        </div>
      </div>

      <div className="product-info">
       

        <h3>{product.title}</h3>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-bottom">
          <p className="product-price">
            Rs. {product.price}
          </p>

          <button
            className="product-cart-btn"
            onClick={() => addToCart(product)}
          >
            <span>+</span>
            Add
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;