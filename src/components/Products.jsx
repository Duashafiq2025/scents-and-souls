import React from "react";
import ProductCard from "./ProductCard";

function Products() {
  return (
    <div className="products-section">
      <h1>Best Collections</h1>
      <div className="products-container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
export default Products;
