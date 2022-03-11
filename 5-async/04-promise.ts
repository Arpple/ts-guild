import { Magic } from "./magic";

const undef = () => Magic.ioFunc('A', (A) => {})


const single = () => {
	const promiseA = Magic.ioPromise('A')

	promiseA.then((A) => {
		console.log('use', A)
	})

	Magic.ioPromise('B')
		.then((B) => {
			console.log('use', B)
		})


	promiseA.then((A) => {
		console.log('use with other', A)
	})
}

// single()
/*
process ->>
A       : xPA-------xA
PA.then :    ---------A
B       :    xPB---------xB
PD.then :       -----------B
PA.then :    ---------~A
        : ==================
*/


const sync = () => {
	// const promiseA = Magic.ioPromise('A')
	// const promiseUseA = promiseA.then((A) => console.log('A', A))
	// const promiseB = promiseUseA.then(() => Magic.ioPromise('B'))

	// or
	Magic.ioPromise('A')
		.then((A) => console.log('use', A))
		.then(() => Magic.ioPromise('B'))
		.then((B) => console.log('use', B))
		.then(() => Magic.ioPromise('C'))
		.then((C) => console.log('use', C))
}

// sync()
/*
process ->>
A         : xx-------xA
\ use     :            A
  \ B     :             xx-------xB
    \ use :                        B
          : ========================
*/



const concurrent = () => {
	const promiseA = Magic.ioPromise('A')
	const promiseB = Magic.ioPromise('B')
	const promiseC = Magic.ioPromise('C')

	const promiseABC = Promise.all([
		promiseA,
		promiseB,
		promiseC,
	])

	promiseABC.then(([A, B, C]) => {
		console.log('use', A, B, C)
	})
}


// concurrent()
/*
process ->>
promiseA   : xpA-----------A
promiseB   :    xpB---------B
promiseC   :       xpC--------C
promiseABC :          xpABC
.then      :               ----ABC
           : =====================
*/



const syncBut = () => {
	// Magic.ioPromise('A')
	// 	.then((A) => {
	// 		Magic.ioPromise('B' + A)
	// 			.then((B) => {
	// 				Magic.ioPromise('C' + A + B)
	// 					.then((C) => {
	// 						console.log('use', A, B, C)
	// 					})
	// 			})
	// 	})

	const aP = Magic.ioPromise('A')
	const bP = aP.then((A) => Magic.ioPromise('B' + A))
	const cP = Promise.all([aP, bP]).then(([A, B]) => Magic.ioPromise('C' + A + B))

	Promise.all([aP, bP, cP]).then(([A, B, C]) => console.log('use', A, B, C))
}

syncBut()
