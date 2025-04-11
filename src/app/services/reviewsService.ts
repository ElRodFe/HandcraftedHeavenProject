import pool from "@/app/lib/db";

// Get all reviews
export async function getAllReviews() {
  const result = await pool.query("SELECT * FROM reviews;");
  return result.rows;
}

// Get reviews by product ID with user's name
export async function getReviewsByProductId(productId: number) {
  const result = await pool.query(
    `
    SELECT 
      reviews.id,
      reviews.description,
      reviews.user_id,
      reviews.product_id,
      users.name AS username
    FROM reviews
    JOIN users ON reviews.user_id = users.id
    WHERE reviews.product_id = $1
    ORDER BY reviews.id DESC;
    `,
    [productId]
  );

  return result.rows;
}

// Get reviews by user ID
export async function getReviewsByUserId(userId: number) {
  const result = await pool.query(
    "SELECT * FROM reviews WHERE user_id = $1;",
    [userId]
  );
  return result.rows;
}

// Create a new review
export async function createReview(
  userId: number,
  productId: number,
  description: string
) {
  const result = await pool.query(
    `
    INSERT INTO reviews (user_id, product_id, description)
    VALUES ($1, $2, $3)
    RETURNING *;
    `,
    [userId, productId, description]
  );

  return result.rows[0];
}

// Update a review
export async function updateReview(
  reviewId: number,
  description: string
) {
  const result = await pool.query(
    `
    UPDATE reviews
    SET description = $1
    WHERE id = $2
    RETURNING *;
    `,
    [description, reviewId]
  );

  return result.rows[0];
}

// Delete a review
export async function deleteReview(reviewId: number) {
  const result = await pool.query(
    "DELETE FROM reviews WHERE id = $1 RETURNING *;",
    [reviewId]
  );

  return result.rows[0];
}