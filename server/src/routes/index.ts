import { Router } from 'express';
import { getHello } from '../controllers/helloController';
import { getHealth } from '../controllers/healthController';
import { getMetrics } from '../controllers/metricsController';
import contactRoutes from './contact';
import projectsRoutes from './projects';

const router = Router();

router.get('/hello', getHello);
router.get('/health', getHealth);
router.get('/metrics', getMetrics);
router.use('/', contactRoutes);
router.use('/', projectsRoutes);

export default router;



