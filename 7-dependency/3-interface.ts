import { Magic } from "../6-error/magic"

namespace Account {
	export type T = {
		balance: number
	}

	export interface RepoInterface {
		get: (id: string) => Promise<Account.T>
		save: (account: Account.T) => Promise<void>
	}

	export const transferMoney = async (repo: RepoInterface, fromId: string, toId: string, amount: number) => {
		const fromAcc = await repo.get(fromId)
		const toAcc = await repo.get(toId)

		if (fromAcc.balance < amount)
			return

		fromAcc.balance -= amount
		toAcc.balance += amount

		await repo.save(fromAcc)
		await repo.save(toAcc)
	}

}



class AccountRepo implements Account.RepoInterface {
	public async get(id: string): Promise<Account.T> {
		return Magic.getDb(id)
	}

	public async save(account: Account.T): Promise<void> {
		return Magic.saveDb(account)
	}
}

class FakeAccountRepo implements Account.RepoInterface {
	public async get(id: string): Promise<Account.T> {
		return { balance: 100 }
	}

	public async save(account: Account.T): Promise<void> {
	}
}

const main = async () => {
	const fromId = Magic.input('from')
	const toId = Magic.input('to')
	const amount = Magic.input('amount')

	const repo = process.env.NODE_ENV === 'test'
		? new FakeAccountRepo()
		: new AccountRepo()

	await Account.transferMoney(repo, fromId, toId, amount)

	console.log('success')
}
