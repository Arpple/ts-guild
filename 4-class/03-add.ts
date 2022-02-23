export class Cart {
	private items: number[]
	private total: number

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

	public getTotal(): number {
		return this.total
	}

	// add
	public toConsoleString(): string {
		const itemString = (item: number) => {
			return `- ${item} THB`
		}

		return [
			...this.items.map(itemString),
			`total: ${this.total} THB`,
		].join('\n')
	}
}


class Order {
	private items: number[] = []
}

new Order(cart.items)
cart.toOrder()
