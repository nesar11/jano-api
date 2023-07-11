const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
dotenv.config();
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/job');
const cartRoute = require('./routes/loan');
const orderRoute = require('./routes/ep');
const stripeRoute = require('./routes/stripe');
const cors = require('cors');

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('Database connected'))
  .catch((err) => {
    console.log(err);
  });
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/jobs', productRoute);
app.use('/api/loans', cartRoute);
app.use('/api/eps', orderRoute);
app.use('/api/checkout', stripeRoute);

app.listen(port, () => {
  console.log('Backend server is running 5000');
});
