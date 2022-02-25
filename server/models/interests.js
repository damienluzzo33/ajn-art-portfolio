const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const interestSchema = new Schema({
    interest_name: {
        type: String,
        required: true
    },
    interested_collectors: [
        {
            type: ObjectId,
            ref: "Collector"
        }
    ]
})

const Interest = mongoose.model('Interest', interestSchema);

module.exports = Interest;