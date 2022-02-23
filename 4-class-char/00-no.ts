class User {
	private username: string
	private password: string
	private email: string

	public constructor(username: string, password: string, email: string) {
		this.username = username
		this.password = password
		this.email = email
	}

	public getUsername(): string {
		return this.username
	}

	public getPassword(): string {
		return this.password
	}

	public getEmail(): string {
		return this.email
	}
}


function register(input: any) {
	const { username, password, email } = input

	// validate email
	if (email !== 'check') {
		throw new Error('invalid email')
	}

	const user = new User(username, password, email)
}
