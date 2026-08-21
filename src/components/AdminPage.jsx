import React, { useState } from "react";
import { supabase } from "../supabaseClient";

function AdminPage() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  async function addProduct(event) {
    event.preventDefault();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const { error } = await supabase.from("products").insert([
      {
        title,
        price,
        description,
        image_url: imageUrl,
        user_email: user.email,
      },
    ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Product added successfully!");

    setTitle("");
    setPrice("");
    setDescription("");
    setImageUrl("");
  }

  return (
    <div className="admin-page">
      <div className="admin-header">
        <p>ADMIN PORTAL</p>
        <h1>Manage Your Collection</h1>
        <span></span>
        <h2>Add a New Product</h2>
      </div>

      <form className="admin-form" onSubmit={addProduct}>
        <div className="form-row">
          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              placeholder="e.g. Velvet Oud"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              placeholder="e.g. 4500"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            placeholder="Tell something beautiful about this fragrance..."
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Product Image URL</label>
          <input
            type="text"
            placeholder="Paste image URL here"
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
            required
          />
        </div>

        <button className="admin-add-btn" type="submit">
          Add Product <span>✦</span>
        </button>
      </form>
    </div>
  );
}

export default AdminPage;
