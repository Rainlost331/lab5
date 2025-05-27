import * as productRepo from './product.memory.repository.js';
import Product from './product.model.js';

const getAll = async (): Promise<Product[]> => productRepo.getAll();

const getById = async (id: string): Promise<Product | undefined> => productRepo.getById(id);

const create = async (productData: Partial<Product>): Promise<Product> => {
  const product = new Product(productData);
  return productRepo.create(product);
};

const update = async (id: string, productData: Partial<Product>): Promise<Product | null> => productRepo.update(id, productData);

const remove = async (id: string): Promise<boolean> => productRepo.remove(id);

export { getAll, getById, create, update, remove };