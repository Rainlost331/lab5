import { Router, Request, Response } from 'express';
import Client from './client.model';
import * as clientService from './client.service';

const router = Router();

router.route('/').get(async (req: Request, res: Response) => {
  const clients = await clientService.getAll();
  res.json(clients.map(Client.toResponse));
});

router.route('/:id').get(async (req: Request, res: Response) => {
  const client = await clientService.getById(req.params.id);
  if (client) {
    res.json(Client.toResponse(client));
  } else {
    res.status(404).send('Client not found');
  }
});

router.route('/').post(async (req: Request, res: Response) => {
  const client = await clientService.create(req.body);
  res.status(201).json(Client.toResponse(client));
});

router.route('/:id').put(async (req: Request, res: Response) => {
  const client = await clientService.update(req.params.id, req.body);
  if (client) {
    res.json(Client.toResponse(client));
  } else {
    res.status(404).send('Client not found');
  }
});

router.route('/:id').delete(async (req: Request, res: Response) => {
  const result = await clientService.remove(req.params.id);
  if (result) {
    res.status(204).send();
  } else {
    res.status(404).send('Client not found');
  }
});

router.route('/:id/order').get(async (req: Request, res: Response) => {
  const orders = await clientService.getClientOrders(req.params.id);
  res.json(orders);
});

export default router;