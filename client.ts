const options = {
	hostname: 'localhost',
	port: 3000,
	path: '/',
	method: 'GET',
};

const https = require('http')

const req = https.request(options, (res: any) => {
	res.on('data', async (data: any) => {
		console.log(data.toString())
	});

});

req.end();

req.on('error', (e: any) => {
	console.error(e);
});
