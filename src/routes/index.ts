import { Router } from 'express';
import productRoutes from './productRoutes';
import costumerRoutes from './customerRoutes';
import userRoutes from './userRoutes';

const router = Router();

router.use('/products', productRoutes);
router.use('/customers', costumerRoutes);
router.use('/login', userRoutes)

export default router;