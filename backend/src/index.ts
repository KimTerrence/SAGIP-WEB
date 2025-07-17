import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import testDbRouter from './routes/test'; 

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

app.use('/', testDbRouter);

// Routes
app.use('/api', userRoutes);

// Start
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
