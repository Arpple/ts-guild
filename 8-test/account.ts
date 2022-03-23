export namespace Account {
	export type T = {
		balance: number
	}

	export class NoMoneyError extends Error {
	}

	export const transfer = (a: T, b: T, amount: number) => {
		if (a.balance < amount)
			throw new NoMoneyError()

		a.balance -= amount
		b.balance += amount
	}
}
