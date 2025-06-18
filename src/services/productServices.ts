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

export const getAllProducts = async (): Promise<Product[]> => {
  return await prisma.product.findMany();  
}

export const getProductById = async (id: number): Promise<Product> => {
  return await prisma.product.findUnique({
    where: {
      id,
    },
  });
};

export const createProduct = async (product: Product): Promise<Product> => {
  return await prisma.product.create({
    data: product,
  });
}

export const deleteProduct = async (id: number): Promise<Product> => {
  return await prisma.product.delete({
    where: {
      id,
    },
  });
};