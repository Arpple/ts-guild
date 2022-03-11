import https from 'http'

const server = https.createServer({}, function (req, res) {
	console.log('Received request');
	res.writeHead(200);
	res.end("hello world\n");
});


server.listen(3000)
