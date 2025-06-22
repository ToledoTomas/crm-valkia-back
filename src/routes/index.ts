import { Router } from 'express';
import productRoutes from './productRoutes';
import costumerRoutes from './customerRoutes';

const router = Router();

router.use('/products', productRoutes);
router.use('/customers', costumerRoutes);

export default router;