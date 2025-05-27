import { Router } from 'express';
import User from './user.model.js';
import * as usersService from './user.service.js';

const router = Router();

router.route('/').get(async (_req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

export default router;