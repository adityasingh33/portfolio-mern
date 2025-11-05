import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';

/**
 * GET /api/health - Health check endpoint
 */
export async function getHealth(
  _req: Request,
  res: Response,
  _next: NextFunction
): Promise<void> {
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  
  const health = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    database: {
      status: dbStatus,
      readyState: mongoose.connection.readyState,
    },
    uptime: process.uptime(),
  };

  const statusCode = dbStatus === 'connected' ? 200 : 503;
  res.status(statusCode).json(health);
}

