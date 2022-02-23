export class Cart {
	private items: number[]
	private total: number

	public constructor() {
		this.items = []
		this.total = 0
	}

	public getItems(): number[] {
		return this.items
	}

	public getTotal(): number {
		return this.total
	}

	public setItems(items: number[]) {
		this.items = items
	}

	public setTotal(total: number) {
		this.total = total
	}
}

function main() {
	const cart = new Cart()
	const items = [10, 20, 30]
	const total = cart.getItems().reduce((sum, item) => item + sum, 0)
	cart.setItems(items)
	cart.setTotal(total)
}


function controller() {
	const cart = Db.getCart()
	const items = [10, 20, 30]
	const total = cart.getItems().reduce((sum, item) => item + sum, 0)
	cart.items = items
	cart.total = total
	Db.saveCart(cart)
}
