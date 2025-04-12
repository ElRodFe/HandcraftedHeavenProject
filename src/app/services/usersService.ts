import sql from "@/app/lib/db";

// Create a new user
export async function createUser(
  name: string,
  email: string,
  password: string,
  role: string = "client"
) {
  const result = await sql`
    INSERT INTO users (name, email, password, role)
    VALUES (${name}, ${email}, ${password}, ${role})
    RETURNING *;
  `;
  return result[0];
}

// Update a user by ID
export async function updateUser(
  id: number,
  name: string,
  email: string,
  password: string,
  role: string
) {
  const result = await sql`
    UPDATE users
    SET name = ${name}, email = ${email}, password = ${password}, role = ${role}
    WHERE id = ${id}
    RETURNING *;
  `;
  return result[0];
}

// Delete a user by ID
export async function deleteUser(id: number) {
  const result = await sql`
    DELETE FROM users
    WHERE id = ${id}
    RETURNING *;
  `;
  return result[0];
}
