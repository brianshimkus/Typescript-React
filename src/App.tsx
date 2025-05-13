import { User } from './user'

function App() {
	return (
		<>
			<User name={'Jeff'} age={33} isMarried={false} />
			<User name={'Colin'} age={36} isMarried={true} />
		</>
	)
}

export default App
