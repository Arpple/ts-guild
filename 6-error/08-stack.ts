export const error = () => {
	const somethingwronghere = 1 + 1
	throw new Error('invalid')
}

const errorNotThrow = () => {
	const somethingwronghere = 1 + 1
	return false
}

const success = () => {
}

const fn = () => {
	success()
	error()
}

const fnCatch = () => {
	try {
		fn()
	} catch (err) {
		throw err
	}
}

const fnSelfThrow = () => {
	if (!errorNotThrow()) {
		throw new Error('something wrong but not here')
	}
}

const main = () => {
	// fn()
	// fnCatch()
	// fnSelfThrow()
}


main()
