import express from 'express';
import ProductController from '../controllers/ProductController';

const router = express.Router();

router.post('/products', ProductController.create);
router.get('/products', ProductController.getAll);
router.get('/products/:id', ProductController.getById);
router.put('/products/:id', ProductController.update);
router.delete('/products/:id', ProductController.delete);

export default router;
