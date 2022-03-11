/**
	Use case: transfer money

	AC
	Given account A and account B
	When transferMoney from account A to account B with amount
	Then balance of account A reduced by amount
		and balance of account B added by amount


	Given account A and account B
		and balance in account A is lower than amount
	When transferMoney from account A to account B with amount
	Then system should not allow
*/

import { Magic } from './magic'

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
	}

}

const controller = async () => {
	const amount = Magic.input('amount')
	const fromId = Magic.input('from')
	const toId = Magic.input('to')

	await Account.transferMoney(fromId, toId, amount)
	console.log('transfer success')
}

// seperate
// - UI / Logic


Account.transferMoney('from', 'to', 100)


// what can go wrong?
// any
