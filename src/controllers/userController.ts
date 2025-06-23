import { Request, Response } from 'express';
import { getUser, createUser } from '../services/userServices';

export const getUserHandler = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await getUser(email);
    try {
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: 'Usuario no encontrado' });
    }
}

export const createUserHandler = async (req: Request, res: Response) => {
    const user = req.body;
    try {
        const created = await createUser(user);
        res.status(201).json(created);
    } catch (error) {
        res.status(400).json({ message: 'No se pudo crear el usuario' });
    }
}