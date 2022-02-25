const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const couponSchema = new Schema({
    coupon_name: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    days_until_expired: {
        type: Number,
        default: 7
    },
    date_created: {
        type: Date,
        default: Date.now
    }
})

const Coupon = mongoose.model('Coupon', couponSchema);

module.exports = Coupon;