import { Router } from 'express';
import { pool } from '../db';

const router = Router();

router.post('/register', async (req, res) => {
  try {
    const { FirstName, LastName, Email, Address, FieldLocations } = req.body;

    const [result] = await pool.execute(
      `INSERT INTO users (FirstName, LastName, Email, Address, FieldLocations)
       VALUES (?, ?, ?, ?, ?)`,
      [FirstName, LastName, Email, Address, FieldLocations]
    );

    res.status(201).json({ success: true, message: 'User saved!', id: result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Error saving user.' });
  }
});

export default router;
