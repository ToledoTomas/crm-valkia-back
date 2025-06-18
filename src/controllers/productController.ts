import { Product } from '../models/Product';
import { Request, Response } from 'express';
import * as productService from '../services/productServices';
import { prisma } from '../config/prisma';

export const getAllProductsHandler = async (req: Request, res: Response) => {
    const products = await productService.getAllProducts();
    try {
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: 'No se pudo obtener los productos' });
    }
}

export const getProductByIdHandler = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const product = await productService.getProductById(id);
    try {
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ message: 'Producto no encontrado' });
    }
}


export const createProductHandler = async (req: Request, res: Response) => {
    const product = req.body;
    try {
        const created = await productService.createProduct(product);
        res.status(201).json(created);
    } catch (error) {
        res.status(400).json({ message: 'No se pudo crear el producto' });
    }
}


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


export const deleteProductHandler = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const deleted = await productService.deleteProduct(id);
        res.status(200).json(deleted);
    } catch (error) {
        res.status(404).json({ message: 'Producto no encontrado' });
    }
}
