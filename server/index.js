const express = require('express')
const app = express();
const connectDB = require('./db/config');
const cookieParser = require('cookie-parser');

require('dotenv').config();
connectDB();

const PORT = process.env.PORT || 8080;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/pizza', require('./routes/pizzaRoutes'))
app.use('/api/admin', require('./routes/adminRoutes'))
app.use('/api/order', require('./routes/orderRoutes'))

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
})