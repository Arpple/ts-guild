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

import { Account } from '../7-dependency/4-fn'

describe('transfer money', () => {
	describe('transfer A to B', () => {
		const a: Account.T = { id: 'A', balance: 100 }
		const b: Account.T = { id: 'B', balance: 200 }

		let db = {
			'A': a,
			'B': b,
		}

		const get: Account.RepoGet = async (id) => {
			return db[id]
		}

		const save: Account.RepoSave = async (acc) => {
			db[acc.id] = acc
		}

		beforeAll(async () => {
			await Account.transferMoney(get, save)('A', 'B', 50)
		})

		it('A balance is reduced', async () => {
			const newA = await get('A')
			expect(newA.balance).toBe(50)
		})

		it('B balance is reduced', async () => {
			const newA = await get('B')
			expect(newA.balance).toBe(250)
		})
	})
})
