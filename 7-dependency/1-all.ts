import { Magic } from "../6-error/magic"

const transfer = async () => {
	const fromId = Magic.input('from')
	const toId = Magic.input('to')

	const fromAcc = await Magic.getDb(fromId)
	const toAcc = await Magic.getDb(toId)

	const amount = Magic.input('amount')
	fromAcc.balance -= amount
	toAcc.balance -= amount

	await Magic.saveDb(fromAcc)
	await Magic.saveDb(toAcc)

	console.log('success')
}

