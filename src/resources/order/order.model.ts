import { v4 as uuidv4 } from 'uuid';

export interface IOrder {
  id?: string;
  clientId: string;
  products?: string[];
  status?: string;
  total?: number;
  createdAt?: string;
}

class Order {
  id: string;
  clientId: string;
  products: string[];
  status: string;
  total: number;
  createdAt: string;

  constructor({ 
    id = uuidv4(), 
    clientId, 
    products = [], 
    status = 'pending', 
    total = 0 
  }: IOrder) {
    this.id = id;
    this.clientId = clientId;
    this.products = products;
    this.status = status;
    this.total = total;
    this.createdAt = new Date().toISOString();
  }

  static toResponse(order: Order) {
    const { id, clientId, products, status, total, createdAt } = order;
    return { id, clientId, products, status, total, createdAt };
  }
}

export default Order;