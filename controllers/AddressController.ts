import express from 'express';
import Address from '../models/address'

class AddressController {
  static async create(req: express.Request, res: express.Response) {
    try {
      const newAddress = new Address(req.body);
      await newAddress.save();
      res.status(201).json(newAddress);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getById(req: express.Request, res: express.Response) {
    try {
      const address = await Address.findById(req.params.id);
      if (!address) return res.status(404).json({ message: 'Produto não encontrado' });
      res.json(address);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getAll(req: express.Request, res: express.Response) {
    try {
      const addresss = await Address.find();
      res.json(addresss);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async update(req: express.Request, res: express.Response) {
    try {
      const updatedAddress = await Address.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedAddress) return res.status(404).json({ message: 'Produto não encontrado' });
      res.json(updatedAddress);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async delete(req: express.Request, res: express.Response) {
    try {
      const address = await Address.findByIdAndDelete(req.params.id);
      if (!address) return res.status(404).json({ message: 'Produto não encontrado' });
      res.json({ message: 'Produto deletado com sucesso' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default AddressController;
