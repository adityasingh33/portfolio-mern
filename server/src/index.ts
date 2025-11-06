import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import routes from './routes';
import { errorHandler } from './middleware/errorHandler';
import { connectDB } from './utils/database';

dotenv.config();

const app = express();

// Security & parsing
app.use(helmet());
// CORS configuration - allow requests from client
app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Root route
app.get('/', (_req: Request, res: Response) => {
  res.json({
    message: 'Portfolio MERN API Server',
    version: '0.1.0',
    endpoints: {
      health: '/health',
      apiHealth: '/api/health',
      metrics: '/api/metrics',
      hello: '/api/hello',
      projects: '/api/projects (GET)',
      contact: '/api/contact (POST)'
    }
  });
});

// Health route
app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
});

// API routes
app.use('/api', routes);

// 404 handler
app.use((_req: Request, res: Response) => {
  res.status(404).json({ error: 'Not Found' });
});

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

// Connect to MongoDB and start server
async function startServer() {
  try {
    // Connect to MongoDB
    await connectDB();

    // Start server
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();



