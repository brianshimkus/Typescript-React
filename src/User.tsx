import { useState } from 'react'

export interface User {
	name: string
	age: number
	isMarried: boolean
}

export const User = (props: User) => {
	const [userBio, setUserBio] = useState<string | null>('')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserBio(e.target.value)
	}

	return (
		<div>
			<p>Name: {props.name}</p>
			<p>Age: {props.age}</p>
			<p>This user: {props.isMarried ? 'is married' : 'is single'}</p>
			<p>
				{props.name} Bio: {!userBio ? 'No Bio Available' : userBio}
			</p>
			<input onChange={handleChange} />
		</div>
	)
}
