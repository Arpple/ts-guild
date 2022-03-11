import ws from 'ws'

const server = new ws.Server({
	port: 3000
})


server.on('connection', (ws) => {

})

server.on('message', async (test) => {
	setTimeout(() => console.log('done'), 3000)
})


server.on('close', () => {
	console.log('close')
})
