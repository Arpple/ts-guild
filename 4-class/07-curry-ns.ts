import { pipe } from "fp-ts/lib/function"

export namespace Cart {
	export type T = {
		readonly items: number[],
		readonly total: number,
	}

	export type AnotherT = {
		readonly value: number,
	}

	export const create = (): T => {
		return {
			items: [],
			total: 0,
		}
	}

	const calculateTotal = (items: number[]): number => {
		return items.reduce((sum, item) => sum + item, 0)
	}

	export const addItem = (item: number, cart: T): T => {
		const items = [...cart.items, item]
		return {
			items,
			total: calculateTotal(items),
		}
	}
}


const cart = pipe(
	Cart.create(),
	Cart.addItem(10),
	Cart.addItem(20),
	Cart.addItem(30),
)

namespace CartEx {
	export const addMultipleItem = (items: number[]) => (cart: Cart.T): Cart.T => {
		return items.reduce(
			(c, item) => Cart.addItem(item)(c),
			cart
		)
	}
}

const cart = Cart.create()
Cart.addItem(10)(cart)
CartEx.addMultipleItem([10, 20])(cart)

const cartEx = pipe(
	Cart.create(),
	CartEx.addMultipleItem([10, 20]),
	Cart.addItem(30),
)


const tap = (fn) => (x) => {
	fn(x)
	return x
}



const result = pipe(
	Cart.create(),
	tap(console.log),
	CartEx.addMultipleItem([10, 20]),
	tap(console.log),
	Cart.addItem(30),
)
