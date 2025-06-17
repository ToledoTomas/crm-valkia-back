import { Router } from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProductHandler
} from '../controllers/productController';

const productRoutes = Router();

productRoutes.get('/', getAllProducts);
productRoutes.get('/:id', getProductById);
productRoutes.post('/', createProduct);
productRoutes.put('/:id', updateProductHandler);
productRoutes.delete('/:id', deleteProduct);

export default productRoutes;
