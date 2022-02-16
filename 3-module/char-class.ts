class CharacterC {
	private level = 1
	private exp = 0

	constructor() {
		this.level = 1
		this.exp = 0
	}

	public addExp = (exp: number): this => {
		this.exp += exp
		this.calculateLevel()
		return this
	}

	private calculateLevel = (): void => {
		this.level = (this.exp % 10) + 1
	}
}
