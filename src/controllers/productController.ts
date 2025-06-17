import { Product } from '../models/Product';
import { Request, Response } from 'express';
import * as productService from '../services/productServices';
import { prisma } from '../config/prisma';

export const getAllProducts = async (): Promise<Product[]> => {
    const products = await prisma.product.findMany();
    console.log(products);
    return products;
};

export const getProductById = async (id: number): Promise<Product> => {
    const product = await prisma.product.findUnique({
        where: {
            id,
        },
    });
    return product;
};

export const createProduct = async (product: Product): Promise<Product> => {
    const newProduct = await prisma.product.create({
        data: product,
    });
    return newProduct;
};


export const updateProductHandler = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const productData = req.body;
  
    try {
      const updated = await productService.updateProduct(id, productData);
      res.json(updated);
    } catch (error) {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  };
export const deleteProduct = async (id: number): Promise<Product> => {
    const deletedProduct = await prisma.product.delete({
        where: {
            id,
        },
    });
    return deletedProduct;
};
