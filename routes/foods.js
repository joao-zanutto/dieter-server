const express = require('express');
const Food = require('../models/Food');
const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		const foods = await Food.find();
		res.json(foods);
	} catch (error) {
		res.json({ message: error });
	}
});

router.post('/', async (req, res, next) => {
	const food = new Food({ ...req.body });

	try {
		const savedFood = await food.save();
		res.json(savedFood);
	} catch (error) {
		res.json({ message: error });
	}
});

module.exports = router;
