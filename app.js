require('dotenv/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.DB_STRING, {
	useNewUrlParser: true,
});

const foodsRoute = require('./routes/foods');
const consumeRoute = require('./routes/consume');

app.use('/foods/', foodsRoute);
app.use('/consume/', consumeRoute);

app.listen(3010);
