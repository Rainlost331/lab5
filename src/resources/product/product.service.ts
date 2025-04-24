import * as productRepo from './product.memory.repository';
import Product, { IProduct } from './product.model';

const getAll = async (): Promise<Product[]> => productRepo.getAll();

const getById = async (id: string): Promise<Product | undefined> => productRepo.getById(id);

const create = async (productData: IProduct): Promise<Product> => {
  const product = new Product(productData);
  return productRepo.create(product);
};

const update = async (id: string, productData: Partial<IProduct>): Promise<Product | null> => 
  productRepo.update(id, productData);

const remove = async (id: string): Promise<boolean> => productRepo.remove(id);

export { getAll, getById, create, update, remove };