// const path = require('path')  
module.exports = {  
 publicPath: process.env.NODE_ENV === 'production' ? '/vueBlog2019/'
 : './', 
 // 預設為/ 所有html下的js css 連結都會是/js/xx,在輸出到web server 路徑會有問題,需用./  
 // 新增佈署到github page的設定
} 