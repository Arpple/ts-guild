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

const transferMoney = async (fromId: string, toId: string, amount: number): Promise<boolean> => {
	const fromAcc = await Magic.getDb(fromId)
	if (!isAcc(fromAcc))
		return false

	const toAcc = await Magic.getDb(toId)
	if (!isAcc(toAcc))
		return false

	if (fromAcc.balance < amount)
		return false

	fromAcc.balance -= amount
	toAcc.balance += amount
	return true
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

	if (await transferMoney(fromId, toId, amount))
		console.log('transfer success')
	else
		console.log('not enough money')
}
