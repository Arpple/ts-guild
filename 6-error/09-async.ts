import { Magic } from "./magic";

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
		.catch((err) => {
			// handle
		})


	try {
		const result = Magic.asyncPromise()
	} catch (err) {
		// handle
	}
}
