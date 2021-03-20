const express = require('express');
const foods = require('../repository/foods');
const stats = require('../repository/stats');
const router = express.Router();

router.get('/:id', async (req, res, next) => {
	const consumedFood = await foods.incrementFood(req.params.id);
	foodData = {
		cal: consumedFood.cal,
		carb: consumedFood.carb,
		prot: consumedFood.prot,
		fat: consumedFood.fat,
	};
	const updatedStats = await stats.addFoodStats(foodData);
	const foodList = await foods.getFoodList();
	res.json({ foodList: foodList, stats: updatedStats });
});

module.exports = router;
