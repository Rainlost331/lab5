import { v4 as uuidv4 } from 'uuid';

interface OrderConstructor {
  id?: string;
  clientId: string;
  products?: Product[];
  status?: string;
  total?: number;
}

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  orderId: string | null;
}

class Order {
  public id: string;
  public clientId: string;
  public products: Product[];
  public status: string;
  public total: number;
  public createdAt: string;

  constructor({ id = uuidv4(), clientId, products = [], status = 'pending', total = 0 }: OrderConstructor) {
    this.id = id;
    this.clientId = clientId;
    this.products = products;
    this.status = status;
    this.total = total;
    this.createdAt = new Date().toISOString();
  }

  static toResponse(order: Order): { id: string; clientId: string; products: Product[]; status: string; total: number; createdAt: string } {
    const { id, clientId, products, status, total, createdAt } = order;
    return { id, clientId, products, status, total, createdAt };
  }
}

export default Order;