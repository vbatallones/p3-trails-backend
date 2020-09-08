const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	displayName: {
		type: String,
		default: 'hiker001',
	},
	// longitude: {
	// 	type: Number,
	// 	// required: true,
	// },
	// latitude: {
	// 	type: Number,
	// 	// required: true,
	// },
	// radiusTrail: {
	// 	type: Number,
	// 	// required: true,
	// },
	userTrails: [ {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Trail',
	} ]
});

module.exports = User = mongoose.model('User', UserSchema);
