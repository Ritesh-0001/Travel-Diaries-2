import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js';
import commentRoutes from './routes/comment.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';

dotenv.config(); // Load environment variables from .env file

const jwtSecret = process.env.JWT_SECRET;
const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT || 3000;

// Debugging statements to check if environment variables are loaded
console.log('MONGO_URI:', mongoURI); // This should log your MongoDB URI
console.log('PORT:', port); // This should log 3000 or the specified port in .env file

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log('MongoDb connection error:', err);
  });

const __dirname = path.resolve();
const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
