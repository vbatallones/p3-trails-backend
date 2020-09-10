const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    displayName: {
        type: String,
        default: 'hiker001'
    },
    longitude: {
        type: Number,
        default: 122.3321
    },
    latitude: {
        type: Number,
        default: 47.6062
    },
    radiusTrail: {
        type: Number,
        default: 10
    },
    // userTrails: [ {
    //     type: mongoose.Schema.Types.String,
    //     ref: 'Trail'
    // } ]
    userTrails: Array,
    // image: String
})

module.exports = User = mongoose.model('User', UserSchema);