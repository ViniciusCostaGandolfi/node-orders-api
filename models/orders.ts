import mongoose, { Schema, Document } from 'mongoose';
import { IAddress } from './address';
import { IOrderItem } from './order_items';

interface IOrder extends Document {
  userId: mongoose.Types.ObjectId;
  items: IOrderItem[];
  shippingAddress: IAddress;
  total: number;
  status: string;
}

const OrderSchema: Schema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  items: [{ type: mongoose.Schema.Types.ObjectId, required: true, ref: 'OrderItem' }],
  shippingAddress: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Address' },
  total: { type: Number, required: true },
  status: { type: String, required: true, default: 'pending' },
});

export default mongoose.model<IOrder>('Order', OrderSchema);
