const mongoose = require('mongoose')

const Schema = mongoose.Schema

const frameworkSchema = new Schema({
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

frameworkSchema.pre('save', function (next) {
    next()
})

mongoose.model('framework', frameworkSchema)