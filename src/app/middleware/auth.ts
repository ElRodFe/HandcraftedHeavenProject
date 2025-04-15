import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export const authenticate = (handler: Function) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!);
      (req as any).user = decoded; // Attach user info to the request object
      return handler(req, res);
    } catch (error) {
      return res.status(401).json({ success: false, message: "Invalid token" });
    }
  };
};
