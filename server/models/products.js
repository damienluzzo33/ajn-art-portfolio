const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const collectorSchema = new Schema({
    title: {
        type: String
    },
    medium: {
        type: String
    },
    dimensions: {
        type: String
    },
    description: {
        type: String
    },
    blogs: [
        {
            type: ObjectId,
            ref: "Blog"
        }
    ],
    original_art: {
        type: Boolean
    },
    limited_edition_count: {
        type: Number,
        default: 0
    },
    original_price: {
        type: Number
    },
    
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;