import express from 'express';
import OrderItemsController from '../controllers/OrderItemController';

const router = express.Router();

router.post('/orders_items', OrderItemsController.create);
router.get('/orders_items', OrderItemsController.getAll);
router.get('/orders_items/:id', OrderItemsController.getById);
router.put('/orders_items/:id', OrderItemsController.update);
router.delete('/orders_items/:id', OrderItemsController.delete);

export default router;
