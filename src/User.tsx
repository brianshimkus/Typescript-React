// import { useContext } from 'react'
// import { UserContext } from './UserContextProvider'

export const User = (props: User) => {
	// const { users, updateUser, deleteUser } = useContext(UserContext)
	return (
		<div>
			<p>Name: {props.name}</p>
			<p>Age: {props.age}</p>
			<p>This user: {props.isMarried ? 'is married' : 'is single'}</p>
		</div>
	)
}
