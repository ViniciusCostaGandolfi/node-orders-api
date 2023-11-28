import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Importação dos roteadores
import productRoutes from './routes/ProductRoutes';
import addressRoutes from './routes/AddressRoutes';
import orderItemRoutes from './routes/OrderItemsRoutes';
import orderRoutes from './routes/OrdersRoutes';
import shoppingCartRoutes from './routes/ShoppingCartsRoutes';
import conectToDb from './config';

dotenv.config();

const app = express();

conectToDb()

app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/addresses', addressRoutes);
app.use('/api/order-items', orderItemRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/shopping-carts', shoppingCartRoutes);

// Definindo a porta e iniciando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
