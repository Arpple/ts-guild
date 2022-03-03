import { Magic } from "./magic"

const single = async () => {
	const promiseA = Magic.ioPromise('A')
	const promiseB = Magic.ioPromise('B')

	const A = await promiseA
	console.log('use', A)

	console.log('use', await promiseB)

	const C = await Magic.ioPromise('C')
	console.log('use', C)

	console.log('use', A, await promiseB, C)

	return 1
}

async function f() {}

single()
/*
process ->>
single     : p1------------x1
\ A        :   pA------A
\ B        :     pB-----B
\ C        :       pC----C
use single :                 1
           : ========================
*/


const block = async () => {
	// sync
	const A = await Magic.ioPromise('A')
	const B = await Magic.ioPromise('B')
	const C = await Magic.ioPromise('C')

	// async
	const [a, b, c] = await Promise.all([
		Magic.ioPromise('A'),
		Magic.ioPromise('B'),
		Magic.ioPromise('C'),
	])

	// also async
	const pA = Magic.ioPromise('A')
	const pB = Magic.ioPromise('B')
	const pC = Magic.ioPromise('C')

	console.log('use', await pA, await pB, await pC)
}

