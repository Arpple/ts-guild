export {}
// primitive
const t: boolean = true
const f: boolean = false


const integer: number = 1
const float: number = 0.11
const underscore: number = 12_000_000

const binary: number = 0b101
const hex: number = 0x12
const oct: number = 0o12


const str: string = 'arpple'
const template: string = `Hello ${str}`
const emptyStr: string = ''
const nullStr: string = 'null'



// alias
type Name = string
const myName: Name = 'arpple'

type Degree = number
const rotation: Degree = 180

type Minute = number
const expireIn: Minute = 60
const createdAt: Minute = 60
const updatedAt: Minute = 60


let min: Minute
min = rotation




// array
const nums: number[] = [1, 2, -3, 0.0001, 23, 1, ]
const emptyArr: number[] = []
const names: string[] = ['a', 'b', 'c']

// const mixed: number[] = [1, 'a', 2]

const nested: number[][] = [[1, 2, 3], [4], [1, 2, 3]]



// tuple
type Pair = [number, number]
const pair: Pair = [1, 2]

type User = [number, string]
const [id, userName]: User = [1, 'arpple']




// struct
type Character = {
	name: string,
	level: number,
}

const npc: Character = {
	name: 'Qwerty',
	level: 10,
}


type Monster = {
	name: string,
	level: number,
	exp: number,
}

const createMonster = (): Monster => ({ name: 'a', level: 1, exp: 10 })
const monsterButChar: Character = createMonster()


const monster: Monster = {
	name: 'b',
	level: 10,
	exp: 100,
}

const useCharacter = (char: Character) => {}
useCharacter(monster)



// js compat
type MyTable = {
	colA: number,
	colB: number,
}

const dbGet = () => ({ colA: 1, colB: 2, _sqlResult: 123, _connection: 'asdfsd' })
const row: MyTable = dbGet()



// nullable
const undef: undefined = undefined
const nil: null = null

const jsonObj = {
	a: undefined,
	b: null,
}

// { "b": null }



// void
const log = (): void => {
}

const logResult = log()



// never
const panic = () => {
	throw new Error()
	// axasd
}

panic()


// any
const magic: any = [1, 2, 'ars', { x: 1 }, undefined]
if (typeof magic === "string") {
	magic
}

// unknown
const mystery: unknown = [1, 2, 3, 'a', 'b']



// type operator
// |, or, union
type NumOrString = number | string
const numOrStr: NumOrString = 'asdf'

// { 1, 2, 3, ... } U { 'a', 'b', ... } => { 1, 2, 3, 'a', 'b', ... }

// { 'A', 'B' }

type Fruit = {
	price: number,
	season: string,
}

type Snack = {
	price: number,
	brand: string,
}

const apple: Fruit = { price: 10, season: 'spring' }
const lays: Snack = { price: 10, brand: 'lays' }

type ThingWithPrice = Fruit | Snack
const buy = (thing: ThingWithPrice) => {
	thing.price
}

buy(apple)
buy(lays)


// &, and, intersect
type FruitSnack = Fruit & Snack

const bakedApple: FruitSnack = {
	brand: 'Baker',
	price: 100,
	season: 'all',
}

buy(bakedApple)


type Email = string & "<email>"

const createEmail = (input: string): Email => {
	// validate input ..@..
	return input as Email;
}

const random = createEmail("mail.com")
