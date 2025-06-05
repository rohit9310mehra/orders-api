const { Sequelize } = require('sequelize');
const OrderModel = require('./order');
const OrderItemModel = require('./orderItems');
const config = require('../config/db');

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    logging: config.logging,
  }
);


const Order = OrderModel(sequelize);
const OrderItem = OrderItemModel(sequelize);

Order.hasMany(OrderItem, { foreignKey: 'order_id' });
OrderItem.belongsTo(Order, { foreignKey: 'order_id' });

module.exports = {
  sequelize,
  Order,
  OrderItem,
};
