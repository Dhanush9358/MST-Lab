var http=require('http');
http.createServer(function(req,res)
	{
	    res.writeHead(200,{'content-type':'text/html'});
	    res.write("<body bgcolor='blue'>");
	    res.write("<h1>welcome to Node js</h1>");
	    res.end();
	}).listen(4040);
console.log("Server 4040 started");
