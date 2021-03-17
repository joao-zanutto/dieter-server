const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

app.get('/', (req, res, next) => {
	const payload = {
		message: 'hey dude',
	};

	res.send(payload);
});

mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true });

app.listen(3001);
