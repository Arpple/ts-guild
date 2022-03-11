import { Magic } from './magic'

namespace Account {
	type T = {
		balance: number
	}

	const isAcc = (account: any): account is T => {
		return account !== undefined
	}

	export class NotEnoughMoneyError extends Error {
		constructor(account: T) {
			super(`not enough money, current ${account.balance}`)
		}
	}

	/**
	* @throws {NotFoundError}
	* @throws {NotEnoughMoneyError}
	*/
	export const transferMoney = async (fromId: string, toId: string, amount: number): Promise<void> => {
		const fromAcc = await Magic.getDb(fromId)
		if (!isAcc(fromAcc))
			throw new NotFoundError(`account not found ${fromId}`)

		const toAcc = await Magic.getDb(toId)
		if (!isAcc(toAcc))
			throw new NotFoundError(`account not found ${toId}`)

		if (fromAcc.balance < amount)
			throw new NotEnoughMoneyError(fromAcc)

		fromAcc.balance -= amount
		toAcc.balance += amount
	}

}

class NotFoundError extends Error {}
class ValidationError extends Error {}

const isNumber = (value: any): value is number => {
	return typeof value === 'number'
		&& !isNaN(value)
}

const isId = (value: any): value is string => {
	return typeof value === 'string'
		&& value !== ''
}

const controller = async () => {
	try {
		const amount = Magic.input('amount')
		if (!isNumber(amount))
			throw new ValidationError(`amount should be number, found ${amount}`)

		const fromId = Magic.input('from')
		if (!isId(fromId))
			throw new ValidationError(`from should be id string, found ${fromId}`)

		const toId = Magic.input('to')
		if (!isId(toId))
			throw new ValidationError(`to should be id string, found ${toId}`)

		await Account.transferMoney(fromId, toId, amount)
	} catch (error) {
		if (error instanceof ValidationError) {
			console.log('422', error)
			return
		}

		if (error instanceof NotFoundError) {
			console.log('404', error)
			return
		}

		if (error instanceof Account.NotEnoughMoneyError) {
			console.log('400', error)
			return
		}

		throw error
	}
}
