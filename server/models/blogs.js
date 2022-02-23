const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const blogSchema = new Schema({
    
})

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;