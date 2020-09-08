const mongoose = require('mongoose');
const Schema = mongoose.Schema;

<<<<<<< HEAD

const TrailSchema = new Schema ({
    name: {
        type: String,
        required: true
    }

=======
const TrailSchema =new Schema ({
    name: {
        type: String,
        require: true
    }
>>>>>>> 3d2acaa38d9d2cf2af250ae6a6d4c74d8adb4b2b
})

module.exports = Trail = mongoose.model('Trail', TrailSchema)