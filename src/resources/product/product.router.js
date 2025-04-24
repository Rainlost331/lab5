import { Router } from 'express';
import Product from './product.model.js';
import * as productService from './product.service.js';

const router = Router();

router.route('/').get(async (req, res) => {
  const products = await productService.getAll();
  res.json(products.map(Product.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const product = await productService.getById(req.params.id);
  if (product) {
    res.json(Product.toResponse(product));
  } else {
    res.status(404).send('Product not found');
  }
});

router.route('/').post(async (req, res) => {
  const product = await productService.create(req.body);
  res.status(201).json(Product.toResponse(product));
});

router.route('/:id').put(async (req, res) => {
  const product = await productService.update(req.params.id, req.body);
  if (product) {
    res.json(Product.toResponse(product));
  } else {
    res.status(404).send('Product not found');
  }
});

router.route('/:id').delete(async (req, res) => {
  const result = await productService.remove(req.params.id);
  if (result) {
    res.status(204).send();
  } else {
    res.status(404).send('Product not found');
  }
});

export default router;