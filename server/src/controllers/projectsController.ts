import { Request, Response, NextFunction } from 'express';
import Project from '../models/Project';

/**
 * GET /api/projects - Get all projects
 */
export async function getProjects(
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    next(error);
  }
}

