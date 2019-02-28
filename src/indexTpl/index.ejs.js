var index = require('./index.ejs')
var indexTpl
if( process.env.NODE_ENV === 'production'){
indexTpl = require('!!ejs-loader!./index.php')
}else{
indexTpl = require('!!ejs-loader!./test.php')
}

module.exports = indexTpl
