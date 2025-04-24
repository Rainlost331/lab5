import { Router, Request, Response } from 'express';
import Order from './order.model';
import * as orderService from './order.service';

const router = Router();

router.route('/').get(async (req: Request, res: Response) => {
  const orders = await orderService.getAll();
  res.json(orders.map(Order.toResponse));
});

router.route('/:id').get(async (req: Request, res: Response) => {
  const order = await orderService.getById(req.params.id);
  if (order) {
    res.json(Order.toResponse(order));
  } else {
    res.status(404).send('Order not found');
  }
});

router.route('/').post(async (req: Request, res: Response) => {
  const order = await orderService.create(req.body);
  res.status(201).json(Order.toResponse(order));
});

router.route('/:id').put(async (req: Request, res: Response) => {
  const order = await orderService.update(req.params.id, req.body);
  if (order) {
    res.json(Order.toResponse(order));
  } else {
    res.status(404).send('Order not found');
  }
});

router.route('/:id').delete(async (req: Request, res: Response) => {
  const result = await orderService.remove(req.params.id);
  if (result) {
    res.status(204).send();
  } else {
    res.status(404).send('Order not found');
  }
});

router.route('/:id/products').get(async (req: Request, res: Response) => {
  const products = await orderService.getOrderProducts(req.params.id);
  res.json(products);
});

export default router;