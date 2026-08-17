import React from "react";
import perfume from "../assets/perfume.png";

function ProductCard() {
  return (
    <div className="product-card">
      <img src={perfume} alt="Velvet Noir perfume" />
      <h3>Velvet Noir</h3>
      <p>$49</p>
      <p>A warm and elegant fragrance with a mysterious touch.</p>
      <button>+ Add to Cart</button>
    </div>
  );
}
export default ProductCard;
