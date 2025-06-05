const express = require('express');
const { sequelize } = require('./models');
const bodyParser = require('body-parser');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const PORT = 8082;

app.use(bodyParser.json());
app.use('/api', orderRoutes);

sequelize.sync().then(() => {
  console.log('Database & tables created!');
});

// Sync DB and start server
sequelize.sync().then(() => {
  console.log('Database & tables created!');
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('Unable to connect to DB:', err);
});