var index = require('./index.ejs')
var indexTpl
if( process.env.NODE_ENV === 'production'){
indexTpl = require('./index.php')
}else{
indexTpl = require('./test.php')
}

module.exports = index({tpl:indexTpl})
