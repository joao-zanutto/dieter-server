const Stats = require('../models/Stats');

let repo = {};

repo.addFoodStats = async (foodStats) => {
	const today = new Date();
	const year = today.getFullYear();
	const month = today.getMonth();
	const day = today.getDate();

	try {
		const stats = await Stats.findOne({ year: year, month: month, day: day });
		stats.cal += foodStats.cal;
		stats.carb += foodStats.carb;
		stats.prot += foodStats.prot;
		stats.fat += foodStats.fat;

		await stats.save();
		return stats;
	} catch (error) {
		return error;
	}
};

repo.getDailyStats = async () => {
	const today = new Date();
	const year = today.getFullYear();
	const month = today.getMonth();
	const day = today.getDate();

	try {
		const stats = await Stats.findOne({ year: year, month: month, day: day });

		return stats;
	} catch (error) {
		return error;
	}
};

repo.getStats = async () => {
	try {
		const stats = await Stats.find();
		return stats;
	} catch (error) {
		return error;
	}
};

repo.createStatsDay = async () => {
	const stats = new Stats({});

	try {
		const savedStats = await stats.save();
		return savedStats;
	} catch (error) {
		return { message: error };
	}
};

repo.deleteToday = async () => {
	const today = new Date();
	const year = today.getFullYear();
	const month = today.getMonth();
	const day = today.getDate();

	const stats = await Stats.findOne({ year: year, month: month, day: day });
	try {
		const response = await stats.delete();
		return response;
	} catch (error) {
		return { message: error };
	}
};

module.exports = repo;
