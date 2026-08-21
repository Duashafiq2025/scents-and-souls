import React from "react";
import { supabase } from "../supabaseClient";

function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  deleteItem,
}) {
  async function placeOrder() {
    for (const product of cart) {
      const { error } = await supabase.from("orders").insert([
        {
          product_name: product.title,
          price: product.price,
          quantity: product.quantity,
          total: product.price * product.quantity,
        },
      ]);

      if (error) {
        alert(error.message);
        return;
      }
    }

    alert("Order placed successfully!");

    clearCart();
  }

  const grandTotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );
  return (
    <div className="cart-page">
      <div className="cart-label">
      <h1>Your Cart 🛍</h1>
      <span></span></div>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-layout">
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
                  <h3>Total: Rs.{product.price * product.quantity}</h3>
                  <button
                    className="delete-btn"
                    onClick={() => deleteItem(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Cart Summary</h2>

            <div className="summary-line">
              <span>Products</span>
              <span>{cart.length}</span>
            </div>

            <div className="summary-line grand-total">
              <span>Grand Total</span>
              <span>Rs. {grandTotal}</span>
            </div>

            <button onClick={placeOrder}>Place Order</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
