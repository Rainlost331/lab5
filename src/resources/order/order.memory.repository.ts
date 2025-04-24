import Order from './order.model';

let orders: Order[] = [];

const getAll = async (): Promise<Order[]> => [...orders];

const getById = async (id: string): Promise<Order | undefined> => 
  orders.find((order) => order.id === id);

const create = async (order: Order): Promise<Order> => {
  orders.push(order);
  return order;
};

const update = async (id: string, updatedOrder: Partial<Order>): Promise<Order | null> => {
  const index = orders.findIndex((order) => order.id === id);
  if (index !== -1) {
    orders[index] = { ...orders[index], ...updatedOrder };
    return orders[index];
  }
  return null;
};

const remove = async (id: string): Promise<boolean> => {
  orders = orders.filter((order) => order.id !== id);
  return true;
};

const getOrderProducts = async (orderId: string): Promise<any[]> => {
  // Implemented in product service
  return [];
};

const removeByClientId = async (clientId: string): Promise<boolean> => {
  orders = orders.filter((order) => order.clientId !== clientId);
  return true;
};

export {
  getAll,
  getById,
  create,
  update,
  remove,
  getOrderProducts,
  removeByClientId,
};