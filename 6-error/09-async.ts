import { Magic } from "./magic";

const getOrder = async () => {
	try {
		return await Magic.getDb('order')
	} catch (err) {
		//
	}
}

const main = async () => {
	Magic.asyncWithCallback((err, result) => {
		if (err) {
			// handle
			return
		}

		// use result
	})


	Magic.asyncPromise()
		.then((x) => x + 1)
		.then((x) => x + 1)
		.then((x) => x + 1)
		.then((x) => x + 1)
		.catch(() => {})


	try {
		return Magic.asyncPromise()
	} catch (err) {
		// handle
	}

	const order = await getOrder()
}
