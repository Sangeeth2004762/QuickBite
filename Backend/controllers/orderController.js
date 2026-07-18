const Order = require('../models/orderModel');
const seedOrders = async () => {
  const count = await Order.countDocuments();
  if (count === 0) {
    await Order.insertMany([
      { customerName: "Sangeeth", foodItem: "Chicken Biryani", quantity: 2, address: "CIT Campus, Coimbatore", status: "Delivered" },
      { customerName: "Priya", foodItem: "Margherita Pizza", quantity: 1, address: "RS Puram, Coimbatore", status: "Preparing" },
      { customerName: "Arjun", foodItem: "Smash Burger", quantity: 3, address: "Gandhipuram, Coimbatore", status: "Pending" },
      { customerName: "Kishore Kumar", foodItem: "Pasta Arrabiata", quantity: 2, address: "Peelamedu, Coimbatore", status: "Out for Delivery" },
      { customerName: "Bala", foodItem: "Sushi Platter", quantity: 1, address: "Saibaba Colony, Coimbatore", status: "Pending" },
    ]);
    console.log('QuickBite orders seeded successfully');
  }
};
seedOrders();
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
const createOrder = async (req, res) => {
  try {
    const { customerName, foodItem, quantity, address } = req.body;
    if (!customerName || !foodItem || !quantity || !address) {
      return res.status(400).json({ message: 'All fields are required: customerName, foodItem, quantity, address' });
    }
    const newOrder = await Order.create({ customerName, foodItem, quantity, address });
    res.status(201).json({ message: 'Order placed successfully', order: newOrder });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: 'Validation error', error: err.message });
    }
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
const updateOrder = async (req, res) => {
  try {
    const updated = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updated) {
      return res.status(404).json({ message: `Order with ID ${req.params.id} not found` });
    }
    res.status(200).json({ message: 'Order updated successfully', order: updated });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: 'Validation error', error: err.message });
    }
    if (err.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid ID format' });
    }
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
const deleteOrder = async (req, res) => {
  try {
    const deleted = await Order.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: `Order with ID ${req.params.id} not found` });
    }
    res.status(200).json({ message: 'Order deleted successfully', deletedOrder: deleted });
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid ID format' });
    }
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
module.exports = { getAllOrders, createOrder, updateOrder, deleteOrder };