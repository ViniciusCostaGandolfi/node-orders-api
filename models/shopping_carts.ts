import mongoose, { Schema, Document } from 'mongoose';
import { IOrderItem } from './order_items';

interface IShoppingCart extends Document {
  userId: mongoose.Types.ObjectId;
  items: IOrderItem[];
}

const ShoppingCartSchema: Schema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  items: [{ type: mongoose.Schema.Types.ObjectId, required: true, ref: 'OrderItem' }],
});

export default mongoose.model<IShoppingCart>('ShoppingCart', ShoppingCartSchema);
