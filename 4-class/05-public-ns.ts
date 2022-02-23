export namespace Cart {
	export type T = {
		readonly items: number[],
		readonly total: number,
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

// no local-static
// no need constructor

// no enforce encapsulation

const hackCart: Cart.T = {
	items: [],
	total: 1000,
}
