"use client";

import { useState } from "react";

export default function ReviewForm({ productId }: { productId: number }) {
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: 1, // Replace with the logged-in user's ID
          productId,
          description,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create review");
      }

      alert("Review added successfully!");
      window.location.reload(); // Reload the page to show the new review
    } catch (error) {
      console.error("Error adding review:", error);
      alert("Failed to add review. Please try again.");
    }
  };

  return (
    <form className="box" style={{ maxWidth: "600px", margin: "0 auto" }} onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Add a Review</label>
        <div className="control">
          <textarea
            className="textarea"
            name="description"
            placeholder="Write your review here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
      </div>
      <div className="control">
        <button type="submit" className="button is-primary">
          Submit Review
        </button>
      </div>
    </form>
  );
}