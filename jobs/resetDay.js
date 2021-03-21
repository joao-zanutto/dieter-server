const cron = require('node-cron');
const stats = require('../repository/stats');
const foods = require('../repository/foods');

cron.schedule(
	'01 00 * * *',
	() => {
		console.log('creating stats');
		stats.createStatsDay();
		console.log('resetting food quantity');
		foods.resetDailyQuantity();
	},
	{
		scheduled: true,
		timezone: 'America/Sao_Paulo',
	}
);
