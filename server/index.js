const path = require('path')
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

// serve frontend
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')))

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')))
} else {
  app.get('/', (req, res) => res.send('Please set to production...'))
}

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
})