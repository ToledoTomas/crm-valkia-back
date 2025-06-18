import { Router } from 'express';
import {
  getAllProductsHandler,
  getProductByIdHandler,
  createProductHandler,
  deleteProductHandler,
  updateProductHandler
} from '../controllers/productController';

const productRoutes = Router();

productRoutes.get('/', getAllProductsHandler);
productRoutes.get('/:id', getProductByIdHandler);
productRoutes.post('/', createProductHandler);
productRoutes.put('/:id', updateProductHandler);
productRoutes.delete('/:id', deleteProductHandler);

export default productRoutes;
