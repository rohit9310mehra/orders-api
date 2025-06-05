# orders-api
Order API Project

This project provides APIs for managing orders and their associated order items. It demonstrates the use of Node.js with Sequelize and MySQL for database interaction, adhering to a modular structure with controllers and services.

#Features

Create an order with associated items.

Fetch all orders with their items.

Fetch a specific order by ID.

Modular architecture for scalability.

Sequelize ORM for database management.

Includes dummy data insertion for testing.

#Prerequisites

Node.js (v14 or later)

MySQL database

#Setup

Step 1: Clone the Repository

git clone https://github.com/your-repository/order-api.git
cd order-api

Step 2: Install Dependencies

npm install

Step 3: Configure Database

Open the db/dbConfig.js file.

Update the configuration with your MySQL credentials:

const sequelize = new Sequelize('dev_db', 'your_username', 'your_password', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

Step 4: Start the Server

npm start

The server will start on http://localhost:8082.


#API Endpoints

POST /orders

Create a new order with items.

Request Body

{
  "customer_id": 123,
  "order_date": "2025-06-05",
  "total": 250.00,
  "items": [
    {
      "product_id": 101,
      "quantity": 2,
      "price": 50.00
    },
    {
      "product_id": 102,
      "quantity": 1,
      "price": 150.00
    }
  ]
}

Response

{
  "message": "Order created",
  "orderId": 1
}

GET /orders

Retrieve all orders with their items.

Response

[
  {
    "id": 1,
    "customer_id": 123,
    "order_date": "2025-06-05",
    "total": 250.00,
    "OrderItems": [
      {
        "id": 1,
        "order_id": 1,
        "product_id": 101,
        "quantity": 2,
        "price": 50.00
      },
      {
        "id": 2,
        "order_id": 1,
        "product_id": 102,
        "quantity": 1,
        "price": 150.00
      }
    ]
  }
]

GET /orders/:id

Retrieve a specific order by ID.

Response

{
  "id": 1,
  "customer_id": 123,
  "order_date": "2025-06-05",
  "total": 250.00,
  "OrderItems": [
    {
      "id": 1,
      "order_id": 1,
      "product_id": 101,
      "quantity": 2,
      "price": 50.00
    },
    {
      "id": 2,
      "order_id": 1,
      "product_id": 102,
      "quantity": 1,
      "price": 150.00
    }
  ]
}

project/
├── app.js
├── controllers/
│   └── orderController.js
├── config/
│   ├── db.js
├── models/
│   ├── index.js
│   ├── order.js
│   └── orderItems.js
├── routes/
│   └── orderRoutes.js
├── services/
│   └── orderService.js
└── README.md
