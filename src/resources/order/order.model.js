import { v4 as uuidv4 } from 'uuid';

class Order {
  constructor({ id = uuidv4(), clientId, products = [], status = 'pending', total = 0 } = {}) {
    this.id = id;
    this.clientId = clientId;
    this.products = products;
    this.status = status;
    this.total = total;
    this.createdAt = new Date().toISOString();
  }

  static toResponse(order) {
    const { id, clientId, products, status, total, createdAt } = order;
    return { id, clientId, products, status, total, createdAt };
  }
}

export default Order;