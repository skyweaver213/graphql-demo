const mongoose = require('mongoose')

const Schema = mongoose.Schema

const toolSchema = new Schema({
    name: String,
    desc: String,
    createTime: {
        type: Date,
        default: Date.now()
    },
    updateTime: {
        type: Date,
        default: Date.now()
    }
})

toolSchema.pre('save', function (next) {
    next()
})

mongoose.model('tool', toolSchema)