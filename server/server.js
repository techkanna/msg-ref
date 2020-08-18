const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const { homePage } = require('./routes/default');
const { connectDB } = require('./config/db');
const msgRouter = require('./routes/api/message');
const app = express();

dotenv.config({ path: './config/config.env' });
app.use(morgan('common'));
app.use(cors());
connectDB();
app.use(express.json());
app.get('/', homePage);
app.use('/api/', msgRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`server running on ${PORT}`));
