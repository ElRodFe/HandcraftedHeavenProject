import { NextApiRequest, NextApiResponse } from "next";
import { findUserByEmail } from "@app/services/usersService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  const { email } = req.query;

  // Validate email
  if (!email || typeof email !== "string") {
    return res
      .status(400)
      .json({ success: false, message: "Email is required" });
  }

  try {
    // Fetch user details from the database
    const user = await findUserByEmail(email);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Respond with user details
    res.status(200).json({
      success: true,
      data: {
        name: user.name,
        role: user.role,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error in user-details API:", error);
    res.status(500).json({
      success: false,
      message: "An unexpected error occurred. Please try again.",
    });
  }
}
