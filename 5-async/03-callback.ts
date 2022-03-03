import { Magic } from "./magic";

const single = () => {
	Magic.ioFunc('A', (A) => {
		console.log('use', A)
	})

	Magic.ioFunc('B', (B) => {
		console.log('use', B)
	})
}

single()
/*
process ->>
A     : xx-------xA
\ cb  :            A
B     :   xx-------~xB
\ cb  :               B
      : ===============
*/


const sync = () => {
	Magic.ioFunc('A', (A) => {
		Magic.ioFunc('B with ' + A, (B) => {
			Magic.ioFunc('C with ' + B, (C) => {
				console.log('use', C)
			})
		})
	})
}

// sync()
/*
process ->>
A          : xx-------xA
\ B        :            Ax---------xB
  \ C      :                         Bx-------xC
    \ use  :                                    C
           : ====================================
*/



const concurrent = () => {
	Magic.ioFunc('A', (A) => {
		// A is here
	})

	Magic.ioFunc('B', (B) => {
		// B is here
	})

	Magic.ioFunc('C', (C) => {
		// C is here
	})

	// ??
	Magic.ioFunc('A', (A) => {
		Magic.ioFunc('B', (B) => {
			Magic.ioFunc('C', (C) => {
				console.log('use', A, B, C)
			})
		})
	})
}

// concurrent()
/*
process ->>
A    : xx-------xA
B    :   xx-------xB
C    :     xx-------xC
use  :                ABC
     : ==================
*/
