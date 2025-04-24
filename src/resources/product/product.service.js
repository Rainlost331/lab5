import * as productRepo from './product.memory.repository.js';
import Product from './product.model.js';

const getAll = async () => productRepo.getAll();

const getById = async (id) => productRepo.getById(id);

const create = async (productData) => {
  const product = new Product(productData);
  return productRepo.create(product);
};

const update = async (id, productData) => productRepo.update(id, productData);

const remove = async (id) => productRepo.remove(id);

export { getAll, getById, create, update, remove };