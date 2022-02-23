export class Cart {
	private items: number[]
	private total: number

	public constructor() {
		this.items = []
		this.total = 0
	}

	private updateTotal() {
		this.total = this.items.reduce((sum, item) => sum + item, 0)
	}

	public addItem(item: number): this {
		this.items.push(item)
		this.updateTotal()
		return this
	}

	public getTotal(): number {
		return this.total
	}
}

// encapsulation
// - blackbox
// - hide implementation
//
//
// - keep state private
// - manage state in class
// - public method api















// mutation and side effect

const today = new Day() // thursday
const tomorrow = today.clone().add(1) // friday
console.log(today)

