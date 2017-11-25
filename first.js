console.log("ae");
var http = require('http');
var server = http.createServer( function(req, res){
    res.end("<div>ae</div>");
}).listen(3000);