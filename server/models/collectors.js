const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const collectorSchema = new Schema({
	first_name: {
		type: String,
		trim: true,
		required: 'First name is required',
		minLength: [ 2, 'First Name cant be less than 2 characters' ],
		maxLength: [ 40, 'First name cannot be longer than 40 character' ]
	},
	last_name: {
		type: String,
		trim: true,
		required: 'Last name is required',
		minLength: [ 2, 'Last Name cant be less than 2 characters' ],
		maxLength: [ 40, 'Last name cannot be longer than 40 character' ]
	},
	email: {
		type: String,
		trim: true,
		lowercase: true,
		required: 'Email address is required',
		unique: true,
		match: [
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			'Please use a valid email address'
		]
	},
	password: {
		type: String,
		minLength: [ 6, 'You need a longer password' ],
		maxLength: [ 32, 'Your password is too long' ],
		required: 'You must provide a valid password',
		trim: true
	},
	address: {
		type: String
	},
	zip_code: {
		type: Number
	},
	city: {
		type: String
	},
	state: {
		type: String
	},
	country: {
		type: String,
		default: "United States"
	},
	subscribed: {
		type: Boolean,
		default: false
	},
	coupons_used: [
		{
			type: ObjectId,
			ref: "Coupon"
		}
	],
	collectors_gifts: {
		type: Boolean,
		default: false
	},
	interests: [
		{
			type: ObjectId,
			ref: "Interest"
		}
	],
	loved_art: [
		{
			type: ObjectId,
			ref: "Product"
		}
	],
	purchased_art: [
		{
			type: ObjectId,
			ref: "Product"
		}
	],
	purchased_gifts: [
		{
			type: ObjectId,
			ref: "Product"
		}
	],
	purchases: {
		type: Number,
		default: 0
	},
	coupons_available: [
		{
			type: ObjectId,
			ref: "Coupon"
		}
	],
    date_joined: {
		type: Date,
		default: Date.now
    }
});

collectorSchema.pre('save', async function(next) {
	if (this.isNew || this.isModified('password')) {
		this.password = await bcrypt.hash(this.password, 10);
	}
	this.first_name.charAt(0).toUpperCase() + this.first_name.slice(1);
	this.last_name.charAt(0).toUpperCase() + this.last_name.slice(1);
	next();
});

collectorSchema.methods.comparePassword = async function(password) {
	return bcrypt.compare(password, this.password);
};

const Collector = mongoose.model('Collector', collectorSchema);

module.exports = Collector;
