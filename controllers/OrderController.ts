import express from 'express';
import Order from '../models/orders'
import OrderItem from '../models/order_items'

class OrderController {
  static async create(req: express.Request, res: express.Response) {
    try {
      const orderItems = await Promise.all(
        req.body.items.map(async (item: any) => {
          const newOrderItem = new OrderItem(item);
          await newOrderItem.save();
          return newOrderItem._id;
        })
      );
      const newOrderData = {
        ...req.body,
        items: orderItems,
      };
      const newOrder = new Order(newOrderData);
      await newOrder.save();

      res.status(201).json(newOrder);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }



  static async getById(req: express.Request, res: express.Response) {
    try {
      const order = await Order.findById(req.params.id);
      if (!order) return res.status(404).json({ message: 'Produto não encontrado' });
      res.json(order);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getAll(req: express.Request, res: express.Response) {
    try {
      const orders = await Order.find();
      res.json(orders);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async update(req: express.Request, res: express.Response) {
    try {
      const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedOrder) return res.status(404).json({ message: 'Produto não encontrado' });
      res.json(updatedOrder);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async delete(req: express.Request, res: express.Response) {
    try {
      const order = await Order.findByIdAndDelete(req.params.id);
      if (!order) return res.status(404).json({ message: 'Produto não encontrado' });
      res.json({ message: 'Produto deletado com sucesso' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default OrderController;
