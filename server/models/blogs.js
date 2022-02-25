const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: [
        {
            type: String
        }
    ],
    tags: [
        {
            type: ObjectId,
            ref: "Interest"
        }
    ],
    date_created: {
        type: Date,
        default: Date.now
    }
})

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;