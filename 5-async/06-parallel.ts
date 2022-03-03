import { Magic } from "./magic"

const all = async () => {
	const todoList = ['A', 'B', 'C']
	const resultPromiseList = todoList.map((todo) => Magic.ioPromise(todo)) // [P=>A, P=>B, P=>C]
	const resultListPromise = Promise.all(resultPromiseList) // P => [A, B, C]
	const [A, B, C] = await resultListPromise
}


const concurrent = async () => {
	const ps = Promise.all([
		Magic.ioPromise('A'),
		Magic.ioPromise('B'),
		Magic.ioPromise('C'),
	])

	const result = await ps
	console.log(result)
}

const sync = async () => {
	const ps = Promise.all([
		Promise.resolve(Magic.func('A')),
		Promise.resolve(Magic.func('B')),
		Promise.resolve(Magic.func('C')),
	])

	const result = await ps
	console.log(result)
}

sync()



/* concurrent async
process ->>
A  : xx--------A
B  :   xx-------B
C  :     xx------C
*/


/* concurrent sync
process ->>
A  : xxxxxxA
B  :        xxxxxxxB
C  :                xxxxxxxxxC
*/


/* parallel
process 1 ->>
A  : xxxxxxA

process 2 ->>
B  : xxxxxxB

process 3 ->>
C  : xxxxxxC
*/
