import { NextApiRequest, NextApiResponse } from "next";
import { createReview } from "@app/services/reviewsService";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { userId, productId, description } = req.body;

      if (!userId || !productId || !description) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      await createReview(userId, productId, description);

      return res.status(201).json({ message: "Review created successfully" });
    } catch (error) {
      console.error("Error creating review:", error);
      return res.status(500).json({ error: "Failed to create review" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}