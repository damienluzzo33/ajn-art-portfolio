const mongoose = require('mongoose');

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
	location: {
		address: {
			type: String
		},
		zip_code: {
			type: String
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
		}
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
			piece: {
				type: ObjectId,
				ref: "Product"
			},
			gift: {
				type: Boolean
			},
			coupon_used: {
				type: Boolean
			}
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

const Collector = mongoose.model('Collector', collectorSchema);

module.exports = Collector;
