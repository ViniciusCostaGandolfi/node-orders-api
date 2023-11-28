import express from 'express';
import Product from '../models/products'

class ProductController {
  static async create(req: express.Request, res: express.Response) {
    try {
      const newProduct = new Product(req.body);
      await newProduct.save();
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getById(req: express.Request, res: express.Response) {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) return res.status(404).json({ message: 'Produto não encontrado' });
      res.json(product);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getAll(req: express.Request, res: express.Response) {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async update(req: express.Request, res: express.Response) {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedProduct) return res.status(404).json({ message: 'Produto não encontrado' });
      res.json(updatedProduct);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async delete(req: express.Request, res: express.Response) {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) return res.status(404).json({ message: 'Produto não encontrado' });
      res.json({ message: 'Produto deletado com sucesso' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default ProductController;
