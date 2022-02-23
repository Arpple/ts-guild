import { Cart as CartClass } from './04-public'
import { Cart as CartNs } from './05-public-ns'

{
	const classTotal = CartClass.create()
		.addItem(10)
		.addItem(20)
		.addItem(30)
		.total
}


{
	const cart = CartNs.create()
	const cart1 = CartNs.addItem(10, cart)
	const cart2 = CartNs.addItem(20, cart1)
	const cart3 = CartNs.addItem(30, cart2)
	const total = cart3.total
}


const pipe = (start: any, ...fns: any[]) => {
	let result = start
	for (const fn of fns) {
		result = fn(result)
	}
	return result
}

{
	const total = pipe(
		CartNs.create(),
		(cart) => CartNs.addItem(10, cart),
		(cart) => CartNs.addItem(20, cart),
		(cart) => CartNs.addItem(30, cart),
		(cart) => cart.total
	)

	console.log(total)
}



const add = (x) => x = 1
const call = (fn, x) => fn(x)

call((x) => add(x), 10)
call(add, 10)
