var fs = require('fs');
if(fs.existsSync('.pass'))
  return fs.readFileSync(".pass", "utf-8")
var text = "";
var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

for( var i=0; i < 32; i++ )
    text += possible.charAt(Math.floor(Math.random() * possible.length));
console.log(text);
console.log('\n')
