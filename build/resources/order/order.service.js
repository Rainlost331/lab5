import * as orderRepo from './order.memory.repository.js';
import * as productRepo from '../product/product.memory.repository.js';
import Order from './order.model.js';
const getAll = async () => orderRepo.getAll();
const getById = async (id) => orderRepo.getById(id);
const create = async (orderData) => {
    const order = new Order({ clientId: orderData.clientId ?? '', products: orderData.products ?? [], status: orderData.status ?? 'pending', total: orderData.total ?? 0 });
    return orderRepo.create(order);
};
const update = async (id, orderData) => orderRepo.update(id, orderData);
const remove = async (id) => {
    await productRepo.removeByOrderId(id);
    return orderRepo.remove(id);
};
const getOrderProducts = async (_orderId) => orderRepo.getOrderProducts();
export { getAll, getById, create, update, remove, getOrderProducts };
//# sourceMappingURL=order.service.js.map