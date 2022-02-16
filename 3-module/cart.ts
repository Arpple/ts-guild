type Item = {
	product: string,
	price: number,
}

type Cart = {
	customer: string,
	items: Item[],
	total: number,
}

const potato: Item = {
	product: 'potato',
	price: 100,
}

const create = (customer: string): Cart => {
	return {
		customer,
		items: [],
		total: 0,
	}
}

const calculateTotal = (items: Item[]): number => {
	return items.reduce((sum, item) => sum + item.price, 0)
}

const addItem = (cart: Cart, item: Item): Cart => {
	const items = [...cart.items, item]
	return {
		...cart,
		items,
		total: calculateTotal(items),
	}
}
