const express = require('express');
const Stats = require('../models/Stats');
const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		const stats = await Stats.find();
		res.json(stats);
	} catch (error) {
		res.json({ message: error });
	}
});

router.post('/', async (req, res, next) => {
	const stats = new Stats({});

	try {
		const savedStats = await stats.save();
		res.json(savedStats);
	} catch (error) {
		res.json({ message: error });
	}
});

module.exports = router;
