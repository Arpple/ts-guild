import { Magic } from "../6-error/magic"

namespace Account {
	type T = {
		balance: number
	}

	export const transferMoney = async (fromId: string, toId: string, amount: number) => {
		const fromAcc = await Magic.getDb(fromId)
		const toAcc = await Magic.getDb(toId)

		if (fromAcc.balance < amount)
			return

		fromAcc.balance -= amount
		toAcc.balance += amount

		await Magic.saveDb(fromAcc)
		await Magic.saveDb(toAcc)
	}

}

const main = async () => {
	const fromId = Magic.input('from')
	const toId = Magic.input('to')
	const amount = Magic.input('amount')

	await Account.transferMoney(fromId, toId, amount)

	console.log('success')
}
