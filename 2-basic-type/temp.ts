export {}

type Email = string & "<email>" & "no-hack"

const createEmail = (input: string): Email => {
	// validate input ..@..
	return input as Email;
}


type NumStr = string & number
const x: NumStr = null as NumStr

