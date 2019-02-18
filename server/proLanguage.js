const mongoose = require('mongoose')

const proLanguage = mongoose.model('proLanguage')

const proLanguageFetch = async (ctx, next) => {
    const proLanguageData = await proLanguage.find({})
    console.log('proLanguageData ---', proLanguageData)
    if (proLanguage.length) {
        ctx.body = {
            success: true,
            data: proLanguageData
        }
    }

}

const proLanguageSave = async (ctx, next) => {
    const opts = ctx.request.body
  
    const _proLanguage = new proLanguage(opts)
    const proLanguageSave = await _proLanguage.save()
  
    if (proLanguageSave) {
      ctx.body = {
        success: true,
        data: proLanguageSave
      }
    } else {
      ctx.body = {
        success: false
      }
    }
}

module.exports = {
    proLanguageFetch,
    proLanguageSave
}