import { Router, Request, Response } from 'express';
import Product from './product.model';
import * as productService from './product.service';

const router = Router();

router.route('/').get(async (req: Request, res: Response) => {
  const products = await productService.getAll();
  res.json(products.map(Product.toResponse));
});

router.route('/:id').get(async (req: Request, res: Response) => {
  const product = await productService.getById(req.params.id);
  if (product) {
    res.json(Product.toResponse(product));
  } else {
    res.status(404).send('Product not found');
  }
});

router.route('/').post(async (req: Request, res: Response) => {
  const product = await productService.create(req.body);
  res.status(201).json(Product.toResponse(product));
});

router.route('/:id').put(async (req: Request, res: Response) => {
  const product = await productService.update(req.params.id, req.body);
  if (product) {
    res.json(Product.toResponse(product));
  } else {
    res.status(404).send('Product not found');
  }
});

router.route('/:id').delete(async (req: Request, res: Response) => {
  const result = await productService.remove(req.params.id);
  if (result) {
    res.status(204).send();
  } else {
    res.status(404).send('Product not found');
  }
});

export default router;