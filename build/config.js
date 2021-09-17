var path = require('path')
var fs = require('fs')
var nodeExternals  = require('webpack-node-externals')

var transitionList = fs.readdirSync(path.resolve(__dirname,'../src/transitions'))
var externals = {};
console.log(transitionList)
// console.log(path.basename)
transitionList.forEach(function(file){
    file = path.basename(file, '.js');
    externals[`element-ui/src/transitions/${file}`] = `element-ui/lib/transitions/${file}`;
})

externals = [Object.assign({
    vue: 'vue'
}, externals), nodeExternals()];

console.log(externals)
console.log(path.resolve(__dirname,'../'))
console.log(__dirname)