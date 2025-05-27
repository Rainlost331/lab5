import { Router } from 'express';
import Order from './order.model.js';
import * as orderService from './order.service.js';

const router = Router();

router.route('/').get(async (_req, res) => {
  const orders = await orderService.getAll();
  res.json(orders.map(Order.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const order = await orderService.getById(req.params.id);
  if (order) {
    res.json(Order.toResponse(order));
  } else {
    res.status(404).send('Order not found');
  }
});

router.route('/').post(async (req, res) => {
  const order = await orderService.create(req.body);
  res.status(201).json(Order.toResponse(order));
});

router.route('/:id').put(async (req, res) => {
  const order = await orderService.update(req.params.id, req.body);
  if (order) {
    res.json(Order.toResponse(order));
  } else {
    res.status(404).send('Order not found');
  }
});

router.route('/:id').delete(async (req, res) => {
  const result = await orderService.remove(req.params.id);
  if (result) {
    res.status(204).send();
  } else {
    res.status(404).send('Order not found');
  }
});

router.route('/:id/products').get(async (req, res) => {
  const products = await orderService.getOrderProducts(req.params.id);
  res.json(products);
});

export default router;