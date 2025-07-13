import express from 'express';
import usersRouter from './routes/users';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', usersRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
