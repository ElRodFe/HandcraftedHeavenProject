import sql from "@/app/lib/db";

type NewProduct = {
  name: string;
  category: string;
  description: string;
  price: number;
  image_url: string;
  user_id: number;
};

// Get All Products
export async function getAllProducts() {
  try {
    const result = await sql`SELECT * FROM products;`;
    return result;
  } catch (error) {
    console.error("Error fetching all products:", error);
    throw new Error("Could not retrieve products");
  }
}

// Get Product By ID
export async function getProductById(productId: number) {
  try {
    const result = await sql`SELECT * FROM products WHERE id = ${productId};`;
    return result[0] || null;
  } catch (error) {
    console.error(`Error fetching product with ID ${productId}:`, error);
    throw new Error("Could not retrieve product by ID");
  }
}

// Get Product By Category
export async function getProductByCategory(category: string) {
  try {
    const result = await sql`SELECT * FROM products WHERE category = ${category};`;
    return result;
  } catch (error) {
    console.error(`Error fetching products by category "${category}":`, error);
    throw new Error("Could not retrieve products by category");
  }
}

// Create a new product
export async function createProduct(product: NewProduct) {
  const { name, category, description, price, image_url, user_id } = product;

  try {
    const result = await sql`
      INSERT INTO products (name, category, description, price, image_url, user_id)
      VALUES (${name}, ${category}, ${description}, ${price}, ${image_url}, ${user_id})
      RETURNING *;
    `;
    return result[0];
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
}

// Edit an existing product
export async function updateProduct(
  productId: number,
  name: string,
  category: string,
  description: string,
  price: number,
  image_url: string
) {
  try {
    const result = await sql`
      UPDATE products
      SET name = ${name},
          category = ${category},
          description = ${description},
          price = ${price},
          image_url = ${image_url}
      WHERE id = ${productId}
      RETURNING *;
    `;
    return result[0];
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
}

// Delete a product
export async function deleteProductById(productId: number) {
  try {
    const result = await sql`
      DELETE FROM products WHERE id = ${productId}
      RETURNING *;
    `;
    return result[0];
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
}
