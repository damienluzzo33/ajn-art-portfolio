const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const couponSchema = new Schema({
    
})

const Coupon = mongoose.model('Coupon', couponSchema);

module.exports = Coupon;