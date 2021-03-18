const express = require('express');
const Food = require('../models/Food');
const router = express.Router();

router.get('/:id', async (req, res, next) => {
	try {
		const targetFood = await Food.findById(req.params.id);
		targetFood.dailyConsumed = targetFood.dailyConsumed + 1;

		await targetFood.save();

		res.json(targetFood);
	} catch (error) {
		res.json({ message: error });
	}
});

module.exports = router;
