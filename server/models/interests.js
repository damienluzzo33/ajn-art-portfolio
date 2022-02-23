const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const interestSchema = new Schema({
    
})

const Interest = mongoose.model('Interest', interestSchema);

module.exports = Interest;