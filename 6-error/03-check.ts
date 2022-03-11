import { Magic } from './magic'

namespace Account {
	type T = {
		balance: number
	}

	const isAcc = (account: any): account is T => {
		return account !== undefined
	}

	export const canTransfer = async (fromId: string, amount: number): Promise<boolean> => {
		const fromAcc = await Magic.getDb(fromId)
		return fromAcc.balance < amount
	}

	export const transferMoney = async (fromId: string, toId: string, amount: number) => {
		const fromAcc = await Magic.getDb(fromId)
		if (!isAcc(fromAcc))
			return

		const toAcc = await Magic.getDb(toId)
		if (!isAcc(toAcc))
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
	const amount = Magic.input('amount')
	if (!isNumber(amount))
		return

	const fromId = Magic.input('from')
	if (!isId(fromId))
		return

	const toId = Magic.input('to')
	if (!isId(toId))
		return

	if (!await Account.canTransfer(fromId, amount)) {
		console.log('not enought money')
		return
	}

	await Account.transferMoney(fromId, toId, amount)
	console.log('transfer success')
}
