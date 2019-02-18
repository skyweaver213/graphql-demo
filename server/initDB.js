const mongoose = require('mongoose')

const proLanguage = mongoose.model('proLanguage')
const framework = mongoose.model('framework')
const tool = mongoose.model('tool')

const initData = {
    proLanguage: [{
        name: 'javascript',
        desc: 'javascript desc'
    },{
        name: 'python',
        desc: 'python desc'
    },{
        name: 'php',
        desc: 'php desc'
    },{
        name: 'go',
        desc: 'go desc'
    }],
    framework: [{
        name: 'react',
        desc: 'react desc'
    },{
        name: 'vue',
        desc: 'vue desc'
    },{
        name: 'ember',
        desc: 'ember desc'
    }],
    tool: [{
        name: 'webstorm',
        desc: 'webstorm desc'
    },{
        name: 'vscode',
        desc: 'vscode desc'
    },{
        name: 'xcode',
        desc: 'xcode desc'
    }]
}

const initDB = async (ctx, next) => {
    let flag
    for (key in initData) {
        let itemArr = initData[key]
        
        for (var i = 0; i < itemArr.length; i++) {
            let _model 
            let opts = itemArr[i]
            flag = ''
            switch(key) {
                case 'proLanguage':
                    _model = new proLanguage(opts)
                    break
                case 'framework':
                    _model = new framework(opts)
                    break
                case 'tool':
                    _model = new tool(opts)
                    break
            }

            flag = await _model.save()

        }
    }

    ctx.body = {
        success: flag ? true : false,
        data:  flag ? 'init success!' : 'init fail!'
    }

}

module.exports = initDB