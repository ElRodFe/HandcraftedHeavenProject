import pool from "@/app/lib/db"

type NewProduct = {
    name: string;
    category: string;
    description: string;
    price: number;
    image_url: string;
    user_id: number;
};

//Get All Products
export async function getAllProducts() {
    try {
      const result = await pool.query("SELECT * FROM products;");
      return result.rows;
    } catch (error) {
      console.error("Error fetching all products:", error);
      throw new Error("Could not retrieve products");
    }
  }
  
//Get Product By ID
export async function getProductById(productId: number) {
  try {
    const result = await pool.query("SELECT * FROM products WHERE id = $1;", [productId]);
    return result.rows[0] || null;
  } catch (error) {
    console.error(`Error fetching product with ID ${productId}:`, error);
    throw new Error("Could not retrieve product by ID");
  }
}

//Get Product By Category
export async function getProductByCategory(category: string) {
  try {
    const result = await pool.query("SELECT * FROM products WHERE category = $1;", [category]);
    return result.rows;
  } catch (error) {
    console.error(`Error fetching products by category "${category}":`, error);
    throw new Error("Could not retrieve products by category");
  }
}

//Create a new product
export async function createProduct(product: NewProduct) {
  const { name, category, description, price, image_url, user_id } = product;

  try {
    const result = await pool.query(
      `INSERT INTO products (name, category, description, price, image_url, user_id)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *;`,
      [name, category, description, price, image_url, user_id]
    );

    return result.rows[0];
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
}

//Delete a product
export async function deleteProductById(productId: number) {
    try {
      const result = await pool.query(
        `DELETE FROM products WHERE id = $1 RETURNING *;`,
        [productId]
      );
  
      return result.rows[0]; // null if not found
    } catch (error) {
      console.error("Error deleting product:", error);
      throw error;
    }
}