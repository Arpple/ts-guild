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

import { Account } from './account'

describe('transfer money', () => {
	describe('transfer A to B', () => {
		const a: Account.T = { balance: 100 }
		const b: Account.T = { balance: 200 }

		Account.transfer(a, b, 50)

		it('A balance is reduced', () => {
			expect(a.balance).toBe(50)
		})

		it('B balance is reduced', () => {
			expect(b.balance).toBe(250)
		})
	})

	describe('A balance is lower than amount and transfer from A to B', () => {
		const a: Account.T = { balance: 100 }
		const b: Account.T = { balance: 200 }
		const action = () => Account.transfer(a, b, 200)

		it('have NoMoney error', () => {
			expect(action).toThrow(Account.NoMoneyError)
		})
	})
})
