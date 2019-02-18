const mongoose = require('mongoose')

const Schema = mongoose.Schema

const proLanguageSchema = new Schema({
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

proLanguageSchema.pre('save', function (next) {
    next()
})

mongoose.model('proLanguage', proLanguageSchema)