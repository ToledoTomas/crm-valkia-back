import { Router } from 'express';
import { createUserHandler } from '../controllers/userController';
import { loginHandler } from '../controllers/authController';

const userRoute = Router();

userRoute.post('/', loginHandler);
userRoute.post('/register', createUserHandler);


export default userRoute;