export namespace Magic {
	const accounts = {
		from: { balance: 100 },
		to: { balance: 200 },
	}

	export const saveDb = async (value: any): Promise<void> => {}

	export const input = (name: string): any => {
		return name === 'amount'
			? 50
			: name
	}

	/**
	 * @throws {ConnectionError}
	 */
	export const getDb = async (id: string): Promise<any> => {
		return accounts[id]
	}

	export const asyncWithCallback = (callback: (err: Error | undefined, result: number | undefined) => void) => {
		callback(new Error('something happen'), undefined)
	}

	export const asyncPromise = async (): Promise<number> => {
		return 1
	}
}
