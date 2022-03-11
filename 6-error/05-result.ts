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

type Success = { success: true }
type Fail = { success: false, error: string }
type Result = Success | Fail

const success = (): Success => ({ success: true })
const fail = (error: string): Fail => ({ success: false, error })

const transferMoney = async (fromId: string, toId: string, amount: number): Promise<Result> => {
	const fromAcc = await Magic.getDb(fromId)
	if (!isAcc(fromAcc))
		return fail(`account not found ${fromId}`)

	const toAcc = await Magic.getDb(toId)
	if (!isAcc(toAcc))
		return fail(`account not found ${toId}`)

	if (fromAcc.balance < amount)
		return fail(`money not enough, balance ${fromAcc.balance}`)

	fromAcc.balance -= amount
	toAcc.balance += amount
	return success()
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

	const result = await transferMoney(fromId, toId, amount)
	if (result.success)
		console.log('transfer success')
	else
		console.log(result.error)
}
