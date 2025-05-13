import { useState } from 'react'

export interface Person {
	name: string
	age: number
	isMarried: boolean
}

export const Person = (props: Person) => {
	const [personBio, setPersonBio] = useState<string | null>('')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPersonBio(e.target.value)
	}

	return (
		<div>
			<p>Name: {props.name}</p>
			<p>Age: {props.age}</p>
			<p>This person: {props.isMarried ? 'is married' : 'is single'}</p>
			<p>
				{props.name} Bio: {!personBio ? 'No Bio Available' : personBio}
			</p>
			<input onChange={handleChange} />
		</div>
	)
}
