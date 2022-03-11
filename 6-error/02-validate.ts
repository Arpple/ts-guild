import { Magic } from './magic'

type Account = {
	balance: number
}

const isNumber = (value: any): value is number => {
	return typeof value === 'number'
		&& !isNaN(value)
}

const isId = (value: any): value is string => {
	return typeof value === 'string'
		&& value !== ''
}

const isAcc = (account: any): account is Account => {
	return account !== undefined
}

const transferMoney = async (fromId: string, toId: string, amount: number) => {
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

	await transferMoney(fromId, toId, amount)
	console.log('transfer success')
}
