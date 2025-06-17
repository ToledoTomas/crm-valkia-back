import { prisma } from '../config/prisma';
import { Product } from '../models/Product';

export const updateProduct = async (
  id: number,
  product: Partial<Product>
): Promise<Product> => {
  return await prisma.product.update({
    where: { id },
    data: product,
  });
};