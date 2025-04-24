import express, { Express, Request, Response, NextFunction } from 'express';
import clientRouter from './resources/client/client.router';
import orderRouter from './resources/order/order.router';
import productRouter from './resources/product/product.router';

const app: Express = express();

app.use(express.json());

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/client', clientRouter);
app.use('/order', orderRouter);
app.use('/products', productRouter);

export default app;