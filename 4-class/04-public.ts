export class Cart {
	public readonly items: number[]
	public readonly total: number

	public static create() {
		return new Cart([])
	}

	private constructor(items: number[]) {
		this.items = items
		this.total = this.calculateTotal()
	}

	private calculateTotal(): number {
		return this.items.reduce((sum, item) => sum + item, 0)
	}

	public addItem(item: number): Cart {
		return new Cart([...this.items, item])
	}
}

export class CartPrinter {
	public static toConsoleString(cart: Cart): string {
		const itemString = (item: number) => {
			return `- ${item} THB`
		}

		return [
			...cart.items.map(itemString),
			`total: ${cart.total} THB`,
		].join('\n')
	}
}


export class Order {
	private items: number[]

	constructor(cart: Cart) {
		this.items = cart.items
	}
}

