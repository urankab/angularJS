const mongoose = require('mongoose')

const PersonSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    province: {
        type: String,
        required: true
    },
    postal_code: {
        type: String,
        required: true
    },
})


module.exports = mongoose.model('People', PersonSchema)