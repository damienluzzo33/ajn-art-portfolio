const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const productSchema = new Schema({
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
    limited_edition_price: {
        type: Number
    },
    pod: [
        {
            type: ObjectId,
            ref: "PodOptions"
        }
    ],
    nft: {
        type: Boolean
    },
    nft_link: {
        type: String
    },
    tattoo_template_price: {
        type: Number,
        default: 100
    },
    digital: {
        type: Boolean
    },
    discount: {
        type: Number,
        default: 0
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;