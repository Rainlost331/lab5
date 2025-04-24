import Product from './product.model';

let products: Product[] = [];

const getAll = async (): Promise<Product[]> => [...products];

const getById = async (id: string): Promise<Product | undefined> => 
  products.find((product) => product.id === id);

const create = async (product: Product): Promise<Product> => {
  products.push(product);
  return product;
};

const update = async (id: string, updatedProduct: Partial<Product>): Promise<Product | null> => {
  const index = products.findIndex((product) => product.id === id);
  if (index !== -1) {
    products[index] = { ...products[index], ...updatedProduct };
    return products[index];
  }
  return null;
};

const remove = async (id: string): Promise<boolean> => {
  products = products.filter((product) => product.id !== id);
  return true;
};

const removeByOrderId = async (orderId: string): Promise<boolean> => {
  products = products.filter((product) => product.orderId !== orderId);
  return true;
};

export { getAll, getById, create, update, remove, removeByOrderId };