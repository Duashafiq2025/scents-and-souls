import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { supabase } from "../supabaseClient";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const response = await supabase.from("products").select("*");

      if (response.data) {
        setProducts(response.data);
      }
    }

    fetchProducts();
  }, []);
  return (
    <div className="products-section">
      <h1>Best Collections</h1>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
export default Products;
