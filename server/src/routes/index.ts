import { Router } from 'express';
import { getHello } from '../controllers/helloController';
import contactRoutes from './contact';

const router = Router();

router.get('/hello', getHello);
router.use('/', contactRoutes);

export default router;



