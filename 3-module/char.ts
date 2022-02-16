export namespace Character {
	export type T = {
		level: number,
		exp: number,
	}

	export const player: T = {
		level: 1,
		exp: 0,
	}

	export const create = (): T => {
		return {
			exp: 0,
			level: 1,
		}
	}

	export const addExp = (char: T, exp: number): T => {
		const addedExp = {
			...char,
			exp: char.exp + exp,
		}

		return calculateLevel(addedExp)
	}

	const calculateLevel = (char: T): T => {
		return {
			...char,
			level: (char.exp % 10) + 1,
		}
	}
}
