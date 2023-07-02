const http= require('http')
const fs = require('fs')
const filecontent =fs.readFileSync('index.html')

const server =http.createServer( res=>{
	res.writeHead(200,{'content-type':'text/html'});
	res.end(filecontent)

})
server.listen(8000);

