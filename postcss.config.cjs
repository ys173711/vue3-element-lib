// https://github.com/madyankin/postcss-each
// https://github.com/antyakushev/postcss-for
// https://github.com/iamstarkov/postcss-color-mix
// https://github.com/awcross/postcss-each-variables

const { beforeEach } = require('node:test');

module.exports = {
  plugins: [
    require('postcss-each-variables'),
    require('postcss-each')({
      plugins: {
        beforeEach: [ // 注意配置在each插件钩子之前
          // require('postcss-for'), // 此插件不符合官方标准, 不使用
          require('postcss-color-mix'),
        ]
      }
    }), 
    
  ]
}