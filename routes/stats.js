const express = require('express');
const router = express.Router();
const stats = require('../repository/stats');

router.get('/', async (req, res, next) => {
	const data = await stats.getStats();
	res.json(data);
});

router.post('/', async (req, res, next) => {
	const createdStats = await stats.createStatsDay();
	res.json(createdStats);
});

module.exports = router;
