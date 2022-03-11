const main = () => {
	try {
		// process
	} catch (error) {
		console.log(error)

		// restart
		main()
	}
}


const server = () => {
	const router = [
		(error) => {
			console.log(error)
			// response 500
		}
	]

	// start server
}
