import * as orderRepo from './order.memory.repository.js';
import * as productRepo from '../product/product.memory.repository.js';
import Order from './order.model.js';

const getAll = async (): Promise<Order[]> => orderRepo.getAll();

const getById = async (id: string): Promise<Order | undefined> => orderRepo.getById(id);

const create = async (orderData: Partial<Order>): Promise<Order> => {
  const order = new Order({ clientId: orderData.clientId ?? '', products: orderData.products ?? [], status: orderData.status ?? 'pending', total: orderData.total ?? 0 });
  return orderRepo.create(order);
};

const update = async (id: string, orderData: Partial<Order>): Promise<Order | null> => orderRepo.update(id, orderData);

const remove = async (id: string): Promise<boolean> => {
  await productRepo.removeByOrderId(id);
  return orderRepo.remove(id);
};

const getOrderProducts = async (_orderId: string): Promise<unknown[]> => orderRepo.getOrderProducts();

export { getAll, getById, create, update, remove, getOrderProducts };