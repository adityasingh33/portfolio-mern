import { Router } from 'express';
import { getProjects } from '../controllers/projectsController';

const router = Router();

// GET /api/projects - Get all projects
router.get('/projects', getProjects);

export default router;

