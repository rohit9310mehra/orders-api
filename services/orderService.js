const { Order, OrderItem } = require('../models');

exports.createOrder = async ({ customer_id, order_date, total, items }) => {
  const order = await Order.create({ customer_id, order_date, total });
  const itemsWithOrderId = items.map(item => ({ ...item, order_id: order.id }));
  await OrderItem.bulkCreate(itemsWithOrderId);
  return order;
};

exports.getOrders = async () => {
  return await Order.findAll({ include: OrderItem, order: [['id', 'ASC']] });
};


exports.getOrderById = async (id) => {
  const order = await Order.findByPk(id, {
    include: OrderItem,
  });

  return order;
};