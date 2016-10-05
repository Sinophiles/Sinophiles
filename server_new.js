var http = require("http");
var port = process.env['PORT'] || 8080;

http.createServer(function(req, res) {
    res.render('cours.ejs');
	
}).listen(port);
console.log("Server ready to accept requests on port %d", port);