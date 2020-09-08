const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TrailSchema = new Schema ({
    name: {
        type: String,
        required: true
    }

})

module.exports = Trail = mongoose.model('Trail', TrailSchema)