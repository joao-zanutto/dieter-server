const mongoose = require('mongoose');

const StatsSchema = mongoose.Schema({
	year: {
		type: Number,
		default: new Date().getFullYear(),
	},
	month: {
		type: Number,
		default: new Date().getMonth(),
	},
	day: {
		type: Number,
		default: new Date().getDate(),
	},
	cal: {
		type: Number,
		default: 0,
	},
	carb: {
		type: Number,
		default: 0,
	},
	prot: {
		type: Number,
		default: 0,
	},
	fat: {
		type: Number,
		default: 0,
	},
});

module.exports = mongoose.model('Stats', StatsSchema);
