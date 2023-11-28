import mongoose, { Schema, Document } from 'mongoose';

export interface IOrderItem extends Document {
  productId: mongoose.Types.ObjectId;
  quantity: number;
}

const OrderItemSchema: Schema = new Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Product' },
  quantity: { type: Number, required: true },
});

export default mongoose.model<IOrderItem>('OrderItem', OrderItemSchema);
