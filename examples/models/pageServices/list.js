//var pageService = require('lark-mvc').pageService
var pageService = require('../../../index.js').pageService
var demo = pageService.create('demo')
demo.render = function(){
    return this.dataServices.demo.getData() + 'demo pageService is loaded!'
}
module.exports = demo
