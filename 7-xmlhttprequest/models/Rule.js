const mongoose = require('mongoose')

const RuleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Rules', RuleSchema)