export class Cart {
	public readonly items: number[]
	public readonly total: number

	public static create() {
		return new Cart([])
	}

	private constructor(items: number[]) {
		this.items = items
		this.total = Cart.calculateTotal(items)
	}

	private static calculateTotal(items: number[]): number {
		return items.reduce((sum, item) => sum + item, 0)
	}

	public static addItem(item: number) {
		return (cart: Cart): Cart => {
			return new Cart([...cart.items, item])
		}
	}
}

// inheritance
type A = number & string
