const mongoose = require('mongoose')

const tool = mongoose.model('tool')

const toolFetch = async (ctx, next) => {
    const toolData = await tool.find({})
    console.log('toolData ---', toolData)
    if (tool.length) {
        ctx.body = {
            success: true,
            data: toolData
        }
    }

}

const toolSave = async (ctx, next) => {
    const opts = ctx.request.body
  
    const _tool = new tool(opts)
    const toolSave = await _tool.save()
  
    if (toolSave) {
      ctx.body = {
        success: true,
        data: toolSave
      }
    } else {
      ctx.body = {
        success: false
      }
    }
}

module.exports = {
    toolFetch,
    toolSave
}