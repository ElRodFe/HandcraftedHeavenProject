import sql from "@/app/lib/db";

// Get all reviews
export async function getAllReviews() {
  const result = await sql`SELECT * FROM reviews;`;
  return result;
}

// Get reviews by product ID with user's name
export async function getReviewsByProductId(productId: number) {
  const result = await sql`
    SELECT 
      reviews.id,
      reviews.description,
      reviews.user_id,
      reviews.product_id,
      users.name AS username
    FROM reviews
    JOIN users ON reviews.user_id = users.id
    WHERE reviews.product_id = ${productId}
    ORDER BY reviews.id DESC;
  `;
  return result;
}

// Get reviews by user ID
export async function getReviewsByUserId(userId: number) {
  const result = await sql`
    SELECT * FROM reviews WHERE user_id = ${userId};
  `;
  return result;
}

// Create a new review
export async function createReview(
  userId: number,
  productId: number,
  description: string
) {
  const result = await sql`
    INSERT INTO reviews (user_id, product_id, description)
    VALUES (${userId}, ${productId}, ${description})
    RETURNING *;
  `;
  return result[0];
}

// Update a review
export async function updateReview(
  reviewId: number,
  description: string
) {
  const result = await sql`
    UPDATE reviews
    SET description = ${description}
    WHERE id = ${reviewId}
    RETURNING *;
  `;
  return result[0];
}

// Delete a review
export async function deleteReview(reviewId: number) {
  const result = await sql`
    DELETE FROM reviews WHERE id = ${reviewId}
    RETURNING *;
  `;
  return result[0];
}
