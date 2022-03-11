import { Magic } from './magic'

namespace Account {
	type T = {
		balance: number
	}

	const isAcc = (account: any): account is T => {
		return account !== undefined
	}

	export const transferMoney = async (fromId: string, toId: string, amount: number) => {
		const fromAcc = await Magic.getDb(fromId)
		if (!isAcc(fromAcc))
			return

		const toAcc = await Magic.getDb(toId)
		if (!isAcc(toAcc))
			return

		if (fromAcc.balance < amount)
			return

		fromAcc.balance -= amount
		toAcc.balance += amount
	}
}


const isNumber = (value: any): value is number => {
	return typeof value === 'number'
		&& !isNaN(value)
}

const isId = (value: any): value is string => {
	return typeof value === 'string'
		&& value !== ''
}


const controller = async () => {
	const amount: unknown = Magic.input('amount')
	if (!isNumber(amount))
		return

	const fromId: unknown = Magic.input('from')
	if (!isId(fromId))
		return

	const toId: unknown = Magic.input('to')
	if (!isId(toId))
		return

	await Account.transferMoney(fromId, toId, amount)
	console.log('transfer success')
}
