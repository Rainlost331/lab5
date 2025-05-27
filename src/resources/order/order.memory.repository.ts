let orders: Order[] = [];

interface Order {
  id: string;
  clientId: string;
  products: Product[];
  status: string;
  total: number;
  createdAt: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  orderId: string | null;
}

const getAll = async (): Promise<Order[]> => [...orders];

const getById = async (id: string): Promise<Order | undefined> => orders.find((order) => order.id === id);

const create = async (order: Order): Promise<Order> => {
  orders.push(order);
  return order;
};

const update = async (id: string, updatedOrder: Partial<Order>): Promise<Order | null> => {
  const index = orders.findIndex((order) => order.id === id);
  if (index !== -1) {
    orders[index] = { ...orders[index], ...updatedOrder } as Order;
    return orders[index];
  }
  return null;
};

const remove = async (id: string): Promise<boolean> => {
  orders = orders.filter((order) => order.id !== id);
  return true;
};

const getOrderProducts = async (): Promise<unknown[]> => [];

const removeByClientId = async (clientId: string): Promise<boolean> => {
  orders = orders.filter((order) => order.clientId !== clientId);
  return true;
};

export { getAll, getById, create, update, remove, getOrderProducts, removeByClientId };