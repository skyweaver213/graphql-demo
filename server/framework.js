const mongoose = require('mongoose')

const framework = mongoose.model('framework')

const frameworkFetch = async (ctx, next) => {
    const frameworkData = await framework.find({})

    if (framework.length) {
        ctx.body = {
            success: true,
            data: frameworkData
        }
    }

}

const frameworkSave = async (ctx, next) => {
    const opts = ctx.request.body
    console.log('_framework save opts ---', opts)
    const _framework = new framework(opts)
    const frameworkSave = await _framework.save()
  
    if (frameworkSave) {
      ctx.body = {
        success: true,
        data: frameworkSave
      }
    } else {
      ctx.body = {
        success: false
      }
    }
}

module.exports = {
    frameworkFetch,
    frameworkSave
}