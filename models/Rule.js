const mongoose = require('mongoose')

const RuleSchema = mongoose.Schema({
    content: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Rules', RuleSchema)