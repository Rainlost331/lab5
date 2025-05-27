import express from 'express';
import clientRouter from './resources/client/client.router.js';
import orderRouter from './resources/order/order.router.js';
import productRouter from './resources/product/product.router.js';
const app = express();
app.use(express.json());
app.use('/', (req, res, next) => {
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
//# sourceMappingURL=app.js.map