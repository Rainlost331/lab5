import { v4 as uuidv4 } from 'uuid';

class Product {
  constructor({ id = uuidv4(), name = 'Product', price = 0, description = '', orderId = null } = {}) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.orderId = orderId;
  }

  static toResponse(product) {
    const { id, name, price, description, orderId } = product;
    return { id, name, price, description, orderId };
  }
}

export default Product;