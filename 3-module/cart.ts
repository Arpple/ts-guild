export enum Status {
	Completed,
	Processing,
	Open,
}

// type Status = 'completed' | 'processing'

export type StatusUpdate = {
	orderId: number,
	status: Status,
}

type NonComplete = Status.Processing | Status.Open



// const update: StatusUpdate = {
// 	status: Status.Completed
// }

export namespace CartEx {
	export type Item = {
		product: string,
		price: number,
	}

	export type Cart = {
		customer: string,
		items: Item[],
		total: number,
	}

	export const potato: Item = {
		product: 'potato',
		price: 100,
	}

	export const create = (customer: string): Cart => {
		return {
			customer,
			items: [],
			total: 0,
		}
	}

	const calculateTotal = (items: Item[]): number => {
		return items.reduce((sum, item) => sum + item.price, 0)
	}

	export const addItem = (cart: Cart, item: Item): Cart => {
		const items = [...cart.items, item]
		return {
			...cart,
			items,
			total: calculateTotal(items),
		}
	}
}
