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
}

const cart = Cart.create() // []
const cartWithItem = cart.addItem(10) // [10]
console.log(cart.getTotal()) // 0




const person = new Person(name = 'John', age = 30)
person.name // 'John'
person.age // 30

const joe = person.changeName('Joe')

person.name // 'John'
person.age // 30

joe.name // 'Joe'
joe.age // 31


// bonus
// thread safe





// ! add requirement
// - print format cart to console
// - checkout and summary into order
