export {}

type Email = string & "<email>" & "no-hack"

const createEmail = (input: string): Email => {
	// validate input ..@..
	return input as Email;
}


type NumStr = string & number
const x: NumStr = null as NumStr




// object interface
export interface Type<T> {
	readonly _tags?: T
}

export interface Vector extends Type<"Vector"> {
	readonly x: number,
	readonly y: number
}

export interface Grid extends Type<"Grid"> {
	readonly x: number,
	readonly y: number
}

const check = (grid: Grid, vector: Vector) => { }

const g: Grid = { x: 1, y: 1 }
const v: Vector = { x: 1, y: 1 }

check(v, g) // error! Argument of type 'Vector' is not assignable to parameter of type 'Grid'.
