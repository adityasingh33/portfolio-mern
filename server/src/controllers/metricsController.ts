import { Request, Response, NextFunction } from 'express';
import Project from '../models/Project';
import Contact from '../models/Contact';

/**
 * GET /api/metrics - Get analytics/metrics
 */
export async function getMetrics(
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const [projectCount, contactCount] = await Promise.all([
      Project.countDocuments(),
      Contact.countDocuments(),
    ]);

    res.status(200).json({
      success: true,
      metrics: {
        projects: projectCount,
        contacts: contactCount,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('Error fetching metrics:', error);
    next(error);
  }
}

