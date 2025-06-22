import { Request, Response } from 'express';
import * as customerService from '../services/customerServices';

export const getAllCustomersHandler = async (req: Request, res: Response) => {
    const customers = await customerService.getAllCustomers();
    try {
        res.status(200).json(customers);
    } catch (error) {
        res.status(404).json({ message: 'No se pudo obtener los clientes' });
    }
}

export const getCustomerByIdHandler = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const customer = await customerService.getCustomerById(id);
    try {
        res.status(200).json(customer);
    } catch (error) {
        res.status(404).json({ message: 'Cliente no encontrado' });
    }
}


export const createCustomerHandler = async (req: Request, res: Response) => {
    const customer = req.body;
    try {
        const created = await customerService.createCustomer(customer);
        res.status(201).json(created);
    } catch (error) {
        res.status(400).json({ message: 'No se pudo crear el cliente' });
    }
}


export const updateClientHandler = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const customerData = req.body;
  
    try {
      const updated = await customerService.updateCustomer(id, customerData);
      res.json(updated);
    } catch (error) {
      res.status(404).json({ message: 'Cliente no encontrado' });
    }
  };


export const deleteClientHandler = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const deleted = await customerService.deleteCustomer(id);
        res.status(200).json(deleted);
    } catch (error) {
        res.status(404).json({ message: 'Cliente no encontrado' });
    }
}