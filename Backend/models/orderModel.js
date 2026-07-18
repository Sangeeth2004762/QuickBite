const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: [true, 'Customer name is required'], trim: true },
  foodItem: { type: String, required: [true, 'Food item is required'], trim: true },
  quantity: { type: Number, required: [true, 'Quantity is required'], min: [1, 'Quantity must be at least 1'] },
  address: { type: String, required: [true, 'Delivery address is required'], trim: true },
  status: { type: String, enum: ['Pending', 'Preparing', 'Out for Delivery', 'Delivered'], default: 'Pending' },
}, { timestamps: true });
module.exports = mongoose.model('Order', orderSchema);