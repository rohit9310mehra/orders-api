const orderService = require('../services/orderService');

exports.createOrder = async (req, res) => {
  try {
      console.log(req.body);
    const { customer_id, order_date, total, items } = req.body;
    if (!customer_id || !order_date || !total || !items || !items.length) {
      return res.status(400).json({ error: 'Missing required fields or items' });
    }

    const order = await orderService.createOrder({ customer_id, order_date, total, items });
    res.status(201).json({ message: 'Order created', orderId: order.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await orderService.getOrders();
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await orderService.getOrderById(id);

    if (!order) {
      return res.status(404).json({ error: `Order not found ${id}` });
    }

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}; 