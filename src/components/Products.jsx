import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { supabase } from "../supabaseClient";

function Products({ addToCart }) {
  const [products, setProducts] = useState([]);
  
  async function fetchProducts() {
    const response = await supabase.from("products").select("*");
    if (response.data) {
      setProducts(response.data);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="products-section" id="collections">
      <div className="collection-heading">
        <p className="collection-label">THE COLLECTION</p>

        <h2>
          Find Your
          <span>Signature Scent.</span>
        </h2>

        <p className="collection-description">
          Explore fragrances created for every mood, every moment, and every
          version of you.
        </p>

        <div className="collection-line">
          <span></span>
          <i>✦</i>
          <span></span>
        </div>
      </div>

      <div className="products-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;
