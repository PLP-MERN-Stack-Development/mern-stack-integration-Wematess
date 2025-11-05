// server/server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import postRoutes from './routes/postRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(express.json()); // Body parser
app.use(cors());

// Routes
app.use('/api/posts', postRoutes);
// app.use('/api/categories', categoryRoutes);
// app.use('/api/auth', userRoutes); // For Task 5

// Error Handler Middleware (MUST be last)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);