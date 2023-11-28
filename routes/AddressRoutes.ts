import express from 'express';
import AddressController from '../controllers/AddressController';

const router = express.Router();

router.post('/addresss', AddressController.create);
router.get('/addresss', AddressController.getAll);
router.get('/addresss/:id', AddressController.getById);
router.put('/addresss/:id', AddressController.update);
router.delete('/addresss/:id', AddressController.delete);

export default router;
