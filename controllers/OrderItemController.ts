import express from 'express';
import OrderItem from '../models/order_items'

class OrderItemController {
  static async create(req: express.Request, res: express.Response) {
    try {
      const newOrderItem = new OrderItem(req.body);
      await newOrderItem.save();
      res.status(201).json(newOrderItem);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getById(req: express.Request, res: express.Response) {
    try {
      const orderItem = await OrderItem.findById(req.params.id);
      if (!orderItem) return res.status(404).json({ message: 'Produto não encontrado' });
      res.json(orderItem);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getAll(req: express.Request, res: express.Response) {
    try {
      const orderItems = await OrderItem.find();
      res.json(orderItems);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async update(req: express.Request, res: express.Response) {
    try {
      const updatedOrderItem = await OrderItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedOrderItem) return res.status(404).json({ message: 'Produto não encontrado' });
      res.json(updatedOrderItem);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async delete(req: express.Request, res: express.Response) {
    try {
      const orderItem = await OrderItem.findByIdAndDelete(req.params.id);
      if (!orderItem) return res.status(404).json({ message: 'Produto não encontrado' });
      res.json({ message: 'Produto deletado com sucesso' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default OrderItemController;
