import { v4 as uuidv4 } from 'uuid';

interface ProductConstructor {
  id?: string;
  name?: string;
  price?: number;
  description?: string;
  orderId?: string | null;
}

class Product {
  public id: string;
  public name: string;
  public price: number;
  public description: string;
  public orderId: string | null;

  constructor({ id = uuidv4(), name = 'Product', price = 0, description = '', orderId = null }: ProductConstructor = {}) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.orderId = orderId;
  }

  static toResponse(product: Product): { id: string; name: string; price: number; description: string; orderId: string | null } {
    const { id, name, price, description, orderId } = product;
    return { id, name, price, description, orderId };
  }
}

export default Product;