const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrailSchema =new Schema ({
    name: {
        type: String,
        require: true
    },
    apiId: {
        type: Number,
        require: true
    }

})

module.exports = Trail = mongoose.model('Trail', TrailSchema)