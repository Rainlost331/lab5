import * as orderRepo from './order.memory.repository.js';
import * as productRepo from '../product/product.memory.repository.js';
import Order from './order.model.js';

const getAll = async () => orderRepo.getAll();

const getById = async (id) => orderRepo.getById(id);

const create = async (orderData) => {
  const order = new Order(orderData);
  return orderRepo.create(order);
};

const update = async (id, orderData) => orderRepo.update(id, orderData);

const remove = async (id) => {
  await productRepo.removeByOrderId(id);
  return orderRepo.remove(id);
};

const getOrderProducts = async (orderId) => orderRepo.getOrderProducts(orderId);

export { getAll, getById, create, update, remove, getOrderProducts };