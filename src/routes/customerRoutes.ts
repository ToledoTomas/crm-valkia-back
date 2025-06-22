import { Router } from 'express';
import {
    getAllCustomersHandler,
    getCustomerByIdHandler,
    createCustomerHandler,
    deleteClientHandler,
    updateClientHandler
} from '../controllers/customerController';

const customerRoutes = Router();

customerRoutes.get('/', getAllCustomersHandler);
customerRoutes.get('/:id', getCustomerByIdHandler);
customerRoutes.post('/', createCustomerHandler);
customerRoutes.put('/:id', updateClientHandler);
customerRoutes.delete('/:id', deleteClientHandler);

export default customerRoutes;
