import * as orderRepo from './order.memory.repository';
import * as productRepo from '../product/product.memory.repository';
import Order, { IOrder } from './order.model';

const getAll = async (): Promise<Order[]> => orderRepo.getAll();

const getById = async (id: string): Promise<Order | undefined> => orderRepo.getById(id);

const create = async (orderData: IOrder): Promise<Order> => {
  const order = new Order(orderData);
  return orderRepo.create(order);
};

const update = async (id: string, orderData: Partial<IOrder>): Promise<Order | null> => 
  orderRepo.update(id, orderData);

const remove = async (id: string): Promise<boolean> => {
  await productRepo.removeByOrderId(id);
  return orderRepo.remove(id);
};

const getOrderProducts = async (orderId: string): Promise<any[]> => 
  orderRepo.getOrderProducts(orderId);

export { getAll, getById, create, update, remove, getOrderProducts };