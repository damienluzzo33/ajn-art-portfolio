const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const podSchema = new Schema({
    pod_name: {
        type: String,
        required: true
    },
    pod_image: {
        type: String,
        required: true
    }
})

const PodOptions = mongoose.model('PodOptions', podSchema);

module.exports = PodOptions;