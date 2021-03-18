const Foods = require('../models/Food');

let repo = {};

repo.getFoodList = async () => {
	try {
		const foods = await Foods.find();
		return foods;
	} catch (error) {
		return { message: error };
	}
};

repo.createFood = async (foodData) => {
	const food = new Foods({ ...foodData });

	try {
		const savedFood = await food.save();
		return savedFood;
	} catch (error) {
		return { message: error };
	}
};

repo.incrementFood = async (id) => {
	try {
		const targetFood = await Foods.findById(id);
		targetFood.dailyConsumed = targetFood.dailyConsumed + 1;
		await targetFood.save();

		return targetFood;
	} catch (error) {
		return { message: error };
	}
};

module.exports = repo;
