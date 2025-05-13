interface User {
	name: string
	age: number
	isMarried: boolean
	country: Countries
}

export enum Countries {
	USA = 'USA',
	Canada = 'Canada',
	Mexico = 'Mexico',
}

export const User = (props: User) => {
	// const { users, updateUser, deleteUser } = useContext(UserContext)
	return (
		<div>
			<p>Name: {props.name}</p>
			<p>Age: {props.age}</p>
			<p>This user: {props.isMarried ? 'is married' : 'is single'}</p>
			<p>Country of Origin: {props.country}</p>
		</div>
	)
}
