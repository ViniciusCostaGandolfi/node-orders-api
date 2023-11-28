import express from 'express';
import ShoppingCart from '../models/shopping_carts'

class ShoppingCartController {
  static async create(req: express.Request, res: express.Response) {
    try {
      const newShoppingCart = new ShoppingCart(req.body);
      await newShoppingCart.save();
      res.status(201).json(newShoppingCart);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getById(req: express.Request, res: express.Response) {
    try {
      const shoppingCart = await ShoppingCart.findById(req.params.id);
      if (!shoppingCart) return res.status(404).json({ message: 'Produto não encontrado' });
      res.json(shoppingCart);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getAll(req: express.Request, res: express.Response) {
    try {
      const shoppingCarts = await ShoppingCart.find();
      res.json(shoppingCarts);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async update(req: express.Request, res: express.Response) {
    try {
      const updatedShoppingCart = await ShoppingCart.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedShoppingCart) return res.status(404).json({ message: 'Produto não encontrado' });
      res.json(updatedShoppingCart);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async delete(req: express.Request, res: express.Response) {
    try {
      const shoppingCart = await ShoppingCart.findByIdAndDelete(req.params.id);
      if (!shoppingCart) return res.status(404).json({ message: 'Produto não encontrado' });
      res.json({ message: 'Produto deletado com sucesso' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default ShoppingCartController;
