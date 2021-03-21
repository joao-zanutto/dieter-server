const Food = require('../models/Food');
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
		await food.save();
		const updatedList = await Foods.find();

		return updatedList;
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

repo.decrementFood = async (id) => {
	try {
		const targetFood = await Foods.findById(id);
		targetFood.dailyConsumed = targetFood.dailyConsumed - 1;
		await targetFood.save();

		return targetFood;
	} catch (error) {
		return { message: error };
	}
};

repo.resetDailyQuantity = async () => {
	try {
		const foodList = await Foods.find();
		foodList.forEach((food) => {
			food.dailyConsumed = 0;
			food.save();
		});
	} catch (error) {
		console.log(error);
	}
};

module.exports = repo;
