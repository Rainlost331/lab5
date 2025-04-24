import { v4 as uuidv4 } from 'uuid';

export interface IProduct {
  id?: string;
  name?: string;
  price?: number;
  description?: string;
  orderId?: string | null;
}

class Product {
  id: string;
  name: string;
  price: number;
  description: string;
  orderId: string | null;

  constructor({ 
    id = uuidv4(), 
    name = 'Product', 
    price = 0, 
    description = '', 
    orderId = null 
  }: IProduct = {}) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.orderId = orderId;
  }

  static toResponse(product: Product) {
    const { id, name, price, description, orderId } = product;
    return { id, name, price, description, orderId };
  }
}

export default Product;