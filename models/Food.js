const mongoose = require('mongoose');

const FoodSchema = mongoose.Schema({
	foodName: {
		type: String,
		required: true,
	},
	portion: {
		type: String,
		required: true,
	},
	cal: {
		type: Number,
		required: true,
	},
	carb: {
		type: Number,
		required: true,
	},
	prot: {
		type: Number,
		required: true,
	},
	fat: {
		type: Number,
		required: true,
	},
	fat: {
		type: Number,
		required: true,
	},
	dailyConsumed: {
		type: Number,
		default: 0,
	},
});

module.exports = mongoose.model('Foods', FoodSchema);
