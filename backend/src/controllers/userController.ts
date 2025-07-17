import { Request, Response } from 'express';
import { db } from '../config/db';

export const registerUser = async (req: Request, res: Response) => {
  const { firstname, lastname, email, address, field_locations } = req.body;

  try {
    const [result] = await db.execute(
      `INSERT INTO users (FirstName, LastName, Email, Address, FieldLocations) VALUES (?, ?, ?, ?, ?)`,
      [firstname, lastname, email, address, field_locations]
    );

    res.json({ success: true, message: "User synced to MySQL" });
  } catch (err) {
    console.error("Insert error:", err);
    res.status(500).json({ success: false, message: "Error saving user", err });
  }
};
