const express = require('express');
const router = express.Router();
const foods = require('../repository/foods');

router.get('/', async (req, res, next) => {
	res.json(await foods.getFoodList());
});

router.post('/', async (req, res, next) => {
	const savedFood = await foods.createFood(req.body);
	res.json(savedFood);
});

module.exports = router;
