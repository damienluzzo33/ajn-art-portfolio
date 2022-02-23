const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const podSchema = new Schema({
    
})

const PodOptions = mongoose.model('PodOptions', podSchema);

module.exports = PodOptions;