const fib = (n) => {
	if (n == 0 || n == 1)
		return n

	return fib(n - 1) + fib(n - 2)
}

const result = (name: string) => `[result ${name}]`

export namespace Magic {
	export const func = (name: string): string => {
		console.log('start', name)
		fib(42)
		console.log('done', name)
		return result(name)
	}

	export const ioFunc = (name: string, after?: (result: string) => void) => {
		console.log('start', name)

		const task = () => {
			console.log('done', name)
			if (after)
				after(result(name))
		}

		setTimeout(task, 1500)
	}

	export const ioPromise = (name: string): Promise<string> => {
		return new Promise((resolve) => {
			ioFunc(name, resolve)
		})
	}
}
