import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { supabase } from "../supabaseClient";

function Products({ addToCart }) {
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
    <div className="products-section" id="collections">
      <h1>Best Collections</h1>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}
export default Products;
