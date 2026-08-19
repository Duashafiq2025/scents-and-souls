import React from "react";
import { supabase } from "../supabaseClient";

function Cart({ cart, increaseQuantity, decreaseQuantity }) {
  async function placeOrder() {
    for (const product of cart) {
      await supabase.from("orders").insert([
        {
          product_name: product.title,
          price: product.price,
          quantity: product.quantity,
          total: product.price * product.quantity,
        },
      ]);
    }

    alert("Order placed successfully!");
  }
  return (
    <div className="cart-page">
      <h1>Your Cart 🛒</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((product) => (
              <div className="cart-item" key={product.id}>
                <img
                  src={product.image_url}
                  alt={product.title}
                  className="cart-image"
                />

                <div className="cart-details">
                  <h2>{product.title}</h2>
                  <p>Rs. {product.price}</p>

                  <div className="quantity">
                    <button onClick={() => decreaseQuantity(product.id)}>
                      -
                    </button>

                    <span>{product.quantity}</span>

                    <button onClick={() => increaseQuantity(product.id)}>
                      +
                    </button>
                  </div>
                </div>
                <div className="cart-total">
                  <h3>
                    Total: Rs.{" "}
                    {cart.reduce(
                      (total, product) =>
                        total + product.price * product.quantity,
                      0,
                    )}
                  </h3>

                  <button onClick={placeOrder}>Place Order</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
