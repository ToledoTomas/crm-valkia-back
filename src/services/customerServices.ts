import { prisma } from '../config/prisma';
import { Customers } from '@prisma/client';

export const getAllCustomers = async (): Promise<Customers[]> => {
  return await prisma.customers.findMany();
};

export const getCustomerById = async (id: number): Promise<Customers | null> => {
  return await prisma.customers.findUnique({
    where: {
      id,
    },
  });
};

export const createCustomer = async (customers: Customers): Promise<Customers> => {
  return await prisma.customers.create({
    data: customers,
  });
};

export const deleteCustomer = async (id: number): Promise<Customers> => {
  return await prisma.customers.delete({
    where: {
      id,
    },
  });
};

export const updateCustomer= async (
  id: number,
  customers: Partial<Customers>
): Promise<Customers> => {
    return await prisma.customers.update({
      where: { id },
      data: customers,
    });
}