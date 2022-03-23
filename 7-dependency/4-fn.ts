import { Magic } from "../6-error/magic"

namespace Account {
	export type T = {
		balance: number
	}

	export type RepoGet = (id: string) => Promise<Account.T>
	export type RepoSave = (account: Account.T) => Promise<void>


	export const transferMoney = (get: RepoGet, save: RepoSave) =>
		async (fromId: string, toId: string, amount: number) => {
			const fromAcc = await get(fromId)
			const toAcc = await get(toId)

			if (fromAcc.balance < amount)
				return

			fromAcc.balance -= amount
			toAcc.balance += amount

			await save(fromAcc)
			await save(toAcc)
		}
}

const main = async () => {
	const fromId = Magic.input('from')
	const toId = Magic.input('to')
	const amount = Magic.input('amount')

	const repoGet: Account.RepoGet = process.env.NODE_ENV === 'test'
		? async () => ({ balance: 100 })
		: Magic.getDb

	const repoSave: Account.RepoSave = process.env.NODE_ENV === 'test'
		? async () => {}
		: Magic.saveDb

	await Account.transferMoney(repoGet, repoSave)(fromId, toId, amount)

	console.log('success')
}
