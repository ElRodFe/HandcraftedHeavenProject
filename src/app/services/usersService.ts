import pool from "@/app/lib/db";

// Create a new user
export async function createUser(name: string, email: string, password: string, role: string = 'client') {
  const result = await pool.query(
    `
    INSERT INTO users (name, email, password, role)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
    `,
    [name, email, password, role]
  );

  return result.rows[0];
}

// Update a user by ID
export async function updateUser(
    id: number,
    name: string,
    email: string,
    password: string,
    role: string
  ) {
    const result = await pool.query(
      `
      UPDATE users
      SET name = $1, email = $2, password = $3, role = $4
      WHERE id = $5
      RETURNING *;
      `,
      [name, email, password, role, id]
    );
  
    return result.rows[0];
  }

// Delete a user by ID
export async function deleteUser(id: number) {
  const result = await pool.query(
    `
    DELETE FROM users
    WHERE id = $1
    RETURNING *;
    `,
    [id]
  );

  return result.rows[0];
}