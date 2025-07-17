import { Router } from 'express';
import { db } from '../config/db'; // adjust if your pool is exported elsewhere

const router = Router();

router.get('/test-db', async (_req, res) => {
  try {
    const connection = await db.getConnection();
    await connection.ping(); // checks if DB is alive
    connection.release();
    res.json({ success: true, message: 'MySQL connection successful!' });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'MySQL connection failed',
      error: err.message || err,
    });
  }
});

export default router;
