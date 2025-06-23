import { Request, Response } from 'express';
import { prisma } from '../config/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const loginHandler = async (req: Request, res: Response) => {
  const { email, password } = req.body

  try {
    const user = await prisma.user.findUnique({ where: { email } })

    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas' })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(401).json({ message: 'Credenciales inválidas' })
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET as string,
      { expiresIn: '7d' }
    )

    res.json({ token })
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor' })
  }
}
